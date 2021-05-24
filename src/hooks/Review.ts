import { getMerchantList } from "./../services/Merchants";
import { IPurchaseDetail } from "./../interfaces/index";
import { TRootState } from "./../reducers/index";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { E_ACTIONS } from "../interfaces/dataTypes";
import { postData } from "../services";
import { URL_ORDERS } from "../constants";

export const useReviewHook = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const selectedMenuList = useSelector(
        (state: TRootState) => state.menus.selectedMenuList
    );
    const merchantList = useSelector(
        (state: TRootState) => state.merchants.merchantList
    );
    const [purchaseDetail, setPurchaseDetail] = useState({
        name: "",
        phone: 0,
        merchant: "",
        notes: "",
    } as IPurchaseDetail);

    const handleInput = (name: string, value: string | number) => {
        const updatedPurchaseDetail = {
            ...purchaseDetail,
            [name]: value,
        };
        setPurchaseDetail(updatedPurchaseDetail);
    };

    const handleCheckout = async () => {
        const { merchant, name, notes, phone } = purchaseDetail;
        const request = {
            name,
            phone,
            products: selectedMenuList,
            merchant: merchant === "" ? merchantList[0].name : merchant,
            date: new Date().toLocaleString(),
            notes,
        };

        await postData(URL_ORDERS, request).then(() => {
            dispatch({
                type: E_ACTIONS.POST_ORDER,
                payload: request,
            });
            history.push("/summary");
        });
    };

    useEffect(() => {
        const fetchMerchantList = async () => {
            const response = await getMerchantList();
            dispatch({
                type: E_ACTIONS.FETCH_MERCHANT_LIST,
                payload: response,
            });
        };

        fetchMerchantList();
    }, []);

    return {
        handleCheckout,
        handleInput,
        selectedMenuList,
        merchantList,
        purchaseDetail,
    };
};
