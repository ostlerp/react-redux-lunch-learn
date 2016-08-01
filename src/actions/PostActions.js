'use strict';

const namespace = 'post/';

export const FETCH_USER = `${namespace}FETCH_POST`;
export const RECEIVE_USER = `${namespace}RECEIVE_POST`;

export let fetchingPost = () => {
  return {
    type: FETCH_POST
  }
}

export let receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  }
}

export let fetchPost = () => {
  return dispatch => {
    dispatch(fetchingPost());
    setTimeout(() => {
      dispatch(receivePost({ id: 1, postMessage: 'sup widdit tho' }));
    }, 2000);
  };
}
