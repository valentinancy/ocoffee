import { E_ACTIONS } from "./../interfaces/dataTypes";

const INITIAL_STATE = {
    orderDetail: {},
};

const orderReducer = (
    state = INITIAL_STATE,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case E_ACTIONS.POST_ORDER:
            return {
                ...state,
                orderDetail: action.payload,
            };
        default:
            return state;
    }
};

export default orderReducer;
