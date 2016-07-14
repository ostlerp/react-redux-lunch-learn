'use strict';

const namespace = 'slides/';

export const INCREMENT_SLIDE = `${namespace}INCREMENT_SLIDE`;
export const DECREMENT_SLIDE = `${namespace}DECREMENT_SLIDE`;

export let incrementSlide = () => {
  return {
    type: INCREMENT_SLIDE
  }
}

export let decrementSlide = () => {
  return {
    type: DECREMENT_SLIDE
  }
}
