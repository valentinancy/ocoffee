import { useSelector } from "react-redux";
import { TRootState } from "./../reducers/index";

export const useSummaryHook = () => {
    const orderDetail = useSelector(
        (state: TRootState) => state.orders.orderDetail
    );

    return {
        buyerName: orderDetail.name,
    };
};
