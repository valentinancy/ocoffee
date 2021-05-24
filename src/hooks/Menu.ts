import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenuList } from "../services/Menus";
import { E_ACTIONS } from "./../interfaces/dataTypes";
import { TRootState } from "../reducers";
import { IMenu } from "../interfaces";

export const useMenuHook = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const menuList = useSelector((state: TRootState) => state.menus.menuList);
    const [selectedMenuList, setSelectedMenuList] = useState([] as IMenu[]);

    const handleSelectMenu = (menu: IMenu) => {
        const updatedSelectedMenuList = [...selectedMenuList, menu];
        setSelectedMenuList(updatedSelectedMenuList);
    };

    const filterDuplicateItems = () => {
        const orderedMenuList: { name: string; quantity: number }[] = [];

        selectedMenuList.forEach((menu) => {
            const index = orderedMenuList.findIndex(
                (orderedMenu) => orderedMenu.name === menu.name
            );
            if (index === -1) {
                orderedMenuList.push({ name: menu.name, quantity: 1 });
            } else {
                orderedMenuList[index].quantity =
                    orderedMenuList[index].quantity + 1;
            }
        });

        return orderedMenuList;
    };

    const handleClickedNext = () => {
        const orderedMenuList = filterDuplicateItems();
        dispatch({
            type: E_ACTIONS.ADD_SELECTED_MENU_LIST,
            payload: orderedMenuList,
        });
        history.push("/review");
    };

    useEffect(() => {
        const fetchMenuList = async () => {
            const response = await getMenuList();
            dispatch({
                type: E_ACTIONS.FETCH_MENU_LIST,
                payload: response,
            });
        };

        fetchMenuList();
    }, []);

    return {
        menuList,
        handleSelectMenu,
        selectedMenuList,
        handleClickedNext,
    };
};
