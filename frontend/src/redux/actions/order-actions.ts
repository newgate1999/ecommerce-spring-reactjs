import {Order, OrderError, Payment} from "../../types/types";
import {
    FETCH_ORDER_SUCCESS,
    FETCH_USER_ORDERS_BY_QUERY_SUCCESS,
    FETCH_USER_ORDERS_SUCCESS,
    FetchOrderSuccessActionType,
    FetchUserOrdersActionType,
    FetchUserOrdersByQueryActionType,
    ORDER_ADDED_FAILURE,
    ORDER_ADDED_SUCCESS,
    OrderAddedFailureActionType,
    OrderAddedSuccessActionType,
    PAYMENT_ADDED_SUCCESS,
    PaymentAddSuccessActionType
} from "../action-types/order-action-types";

export const fetchOrderSuccess = (): FetchOrderSuccessActionType => ({
    type: FETCH_ORDER_SUCCESS
});

export const orderAddedSuccess = (order: Order): OrderAddedSuccessActionType => ({
    type: ORDER_ADDED_SUCCESS,
    payload: order
});

export const confirmPayment = (payment: Payment): PaymentAddSuccessActionType => ({
    type: PAYMENT_ADDED_SUCCESS,
    payload: payment
})

export const orderAddedFailure = (errors: OrderError): OrderAddedFailureActionType => ({
    type: ORDER_ADDED_FAILURE,
    payload: errors
});

export const fetchUserOrdersSuccess = (orders: Array<Order>): FetchUserOrdersActionType => ({
    type: FETCH_USER_ORDERS_SUCCESS,
    payload: orders
});

export const fetchUserOrdersByQuerySuccess = (orders: Array<Order>): FetchUserOrdersByQueryActionType => ({
    type: FETCH_USER_ORDERS_BY_QUERY_SUCCESS,
    payload: orders
});
