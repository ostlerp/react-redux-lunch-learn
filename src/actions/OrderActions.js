'use strict';

const namespace = 'order/';

export const FETCH_ORDER = `${namespace}FETCH_ORDER`;
export const RECEIVE_ORDER = `${namespace}RECEIVE_ORDER`;

export let fetchingOrder = () => {
  return {
    type: FETCH_ORDER
  }
}

export let fetchOrder = (id) => {
  return dispatch => {
    dispatch(fetchingOrder());
    setTimeout(() => {
      dispatch(receiveOrder({ id: 2, name: 'YUP Thing'}));
    }, 3000)
  }
}

export let receiveOrder = (order) => {
  return {
    type: RECEIVE_ORDER,
    order
  }
}