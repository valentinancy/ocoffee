import { E_ACTIONS } from "./../interfaces/dataTypes";

const INITIAL_STATE = {
    merchantList: [],
};

const merchantReducer = (
    state = INITIAL_STATE,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case E_ACTIONS.FETCH_MERCHANT_LIST:
            return {
                ...state,
                merchantList: action.payload,
            };
        default:
            return state;
    }
};

export default merchantReducer;
