import { E_ACTIONS } from "./../interfaces/dataTypes";
import { IMenu } from "../interfaces";

interface IState {
    menuList: IMenu[];
    selectedMenuList: IMenu[];
}

const INITIAL_STATE: IState = {
    menuList: [],
    selectedMenuList: [],
};

const menuReducer = (
    state = INITIAL_STATE,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case E_ACTIONS.FETCH_MENU_LIST:
            return {
                ...state,
                menuList: action.payload,
            };
        case E_ACTIONS.ADD_SELECTED_MENU_LIST:
            return {
                ...state,
                selectedMenuList: action.payload,
            };
        default:
            return state;
    }
};

export default menuReducer;
