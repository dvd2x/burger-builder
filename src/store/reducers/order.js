import * as actionTypes from "../actions/actionTypes";
import { fail } from "assert";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  hourglass: false, //may have to change hourglass to hourglass???
  purchased: false
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { hourglass: true });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderDate, { id: action.orderId });
  return updateObject(state, {
    hourglass: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { hourglass: false });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, { hourglass: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    hourglass: false
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { hourglass: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
