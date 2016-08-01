'use strict';

const namespace = 'report/';

export const FETCH_REPORT = `${namespace}FETCH_REPORT`;
export const RECEIVE_REPORT = `${namespace}RECEIVE_REPORT`;

export let fetchingReport = () => {
  return {
    type: FETCH_REPORT
  }
}

export let receiveReport = (report) => {
  return {
    type: RECEIVE_REPORT,
    report
  }
}

export let fetchReport = () => {
  return dispatch => {
    dispatch(fetchingReport());
    setTimeout(() => {
      dispatch(receiveReport({ id: 1, report: 'TPS' }));
    }, 2000);
  };
}