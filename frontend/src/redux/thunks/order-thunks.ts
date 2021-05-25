import {Dispatch} from "redux";

import {showLoader} from "../actions/auth-actions";
import {
    confirmPayment,
    fetchOrderSuccess,
    fetchUserOrdersByQuerySuccess,
    fetchUserOrdersSuccess,
    orderAddedFailure,
    orderAddedSuccess
} from "../actions/order-actions";
import RequestService from '../../utils/request-service';
import {ordersByEmailQuery} from "../../utils/graphql-query/orders-query";
import {Payment} from "../../types/types";

export const fetchOrder = () => async (dispatch: Dispatch) => {
    dispatch(fetchOrderSuccess());
};

export const addOrder = (order: any, history: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader());
        const response = await RequestService.post("/users/order", order);
        console.log(order);
        const payment: Payment = {
            orderId: "momotest",
            requestId: "123456",
            orderInfo: order.address,
            returnUrl: "http://localhost:3000/order/finalize",
            notifyUrl: "test",
            extraData: "test",
            amount: 50000
        };
        const urlPayment = await RequestService.post("/momos", payment);
        dispatch(confirmPayment(urlPayment.data));
        // history.push("/order/finalize");
        localStorage.removeItem("perfumes");
        dispatch(orderAddedSuccess(response.data));
        return urlPayment;
    } catch (error) {
        dispatch(orderAddedFailure(error.response?.data));
    }
};


export const fetchUserOrders = () => async (dispatch: Dispatch) => {
    dispatch(showLoader());
    const response = await RequestService.get("/users/orders", true);
    dispatch(fetchUserOrdersSuccess(response.data));
};

export const fetchUserOrdersByQuery = (email: string | undefined) => async (dispatch: Dispatch) => {
    dispatch(showLoader());
    const response = await RequestService.post("/users/graphql/orders", {query: ordersByEmailQuery(email)}, true);
    dispatch(fetchUserOrdersByQuerySuccess(response.data.data.ordersByEmail));
};
