'use strict';

const namespace = 'user/';

export const FETCH_USER = `${namespace}FETCH_USER`;
export const RECEIVE_USER = `${namespace}RECEIVE_USER`;
export const FETCH_COMPANY = `${namespace}FETCH_COMPANY`;
export const RECEIVE_COMPANY = `${namespace}RECEIVE_COMPANY`;

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

export let fetchingCompany  = () => {
  return {
    type: FETCH_COMPANY
  }
}

export let receiveCompany = (company) => {
  return {
    type: RECEIVE_COMPANY,
    company
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

export let fetchCompany = () => {
  return dispatch => {
    dispatch(fetchingCompany());
    setTimeout(() => {
      dispatch(receiveCompany({ id: 1, companyName: 'Sandwich, LLC' }));
    }, 2000);
  };
}
