'use strict';

const namespace = 'company/';

export const FETCH_COMPANY = `${namespace}FETCH_COMPANY`;
export const RECEIVE_COMPANY = `${namespace}RECEIVE_COMPANY`;

export let fetchingCompany = () => {
  return {
    type: FETCH_COMPANY
  }
}

export let fetchCompany = (id) => {
  return dispatch => {
    dispatch(fetchingCompany());
    setTimeout(() => {
      dispatch(receiveCompany({ id: 5, name: 'HAWKINS Power and Electric'}));
    }, 3000)
  }
}

export let receiveCompany = (company) => {
  return {
    type: RECEIVE_COMPANY,
    company
  }
}