import {Order, OrderError, Payment} from "../../types/types";
import {ShowLoaderActionType} from "./auth-action-types";

export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const ORDER_ADDED_SUCCESS = "ORDER_ADDED_SUCCESS";
export const ORDER_ADDED_FAILURE = "ORDER_ADDED_FAILURE";
export const FETCH_USER_ORDERS_SUCCESS = "FETCH_ALL_ORDERS_SUCCESS";
export const FETCH_USER_ORDERS_BY_QUERY_SUCCESS = "FETCH_USER_ORDERS_BY_QUERY_SUCCESS";
export const PAYMENT_ADDED_SUCCESS = "PAYMENT_ADDED_SUCCESS";

export type FetchOrderSuccessActionType = { type: typeof FETCH_ORDER_SUCCESS };
export type OrderAddedSuccessActionType = { type: typeof ORDER_ADDED_SUCCESS, payload: Order };
export type OrderAddedFailureActionType = { type: typeof ORDER_ADDED_FAILURE, payload: OrderError };
export type FetchUserOrdersActionType = { type: typeof FETCH_USER_ORDERS_SUCCESS, payload: Array<Order> };
export type FetchUserOrdersByQueryActionType = { type: typeof FETCH_USER_ORDERS_BY_QUERY_SUCCESS, payload: Array<Order> };
export type PaymentAddSuccessActionType = {type: typeof PAYMENT_ADDED_SUCCESS, payload: Payment};

export type OrderActionTypes = FetchOrderSuccessActionType | OrderAddedSuccessActionType | OrderAddedFailureActionType |
    FetchUserOrdersActionType | ShowLoaderActionType | FetchUserOrdersByQueryActionType;
