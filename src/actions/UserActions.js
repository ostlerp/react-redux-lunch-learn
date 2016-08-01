'use strict';

const namespace = 'user/';

export const FETCH_USER = `${namespace}FETCH_USER`;
export const RECEIVE_USER = `${namespace}RECEIVE_USER`;
export const CLEAR_USER = `${namespace}CLEAR_USER`;

export let fetchingUser = () => {
  return {
    type: FETCH_USER
  }
}

export let receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export let clearUser = (user) => {
  return {
    type: CLEAR_USER
  }
}

export let fetchUser = () => {
  return dispatch => {
    dispatch(fetchingUser());
    setTimeout(() => {
      dispatch(receiveUser({ id: 1, username: 'sandwich' }));
    }, 2000);
  };
}
