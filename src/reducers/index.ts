import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import merchantReducer from "./merchantReducer";
import orderReducer from "./orderReducer";

// Combine all sub reducers
const rootReducer = combineReducers({
    menus: menuReducer,
    merchants: merchantReducer,
    orders: orderReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
