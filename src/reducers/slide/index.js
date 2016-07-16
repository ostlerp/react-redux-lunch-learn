import { SlideActions } from '../../actions';

export default function slides(state = 1, action) {
  switch (action.type) {
    case SlideActions.INCREMENT_SLIDE:
      return (state || 1) + 1;
    case SlideActions.DECREMENT_SLIDE:
      let nextState = (state || 1) - 1;
      if(nextState <= 0) {
        return 1
      }

      return nextState;
    default:
      return state;
  }
}
