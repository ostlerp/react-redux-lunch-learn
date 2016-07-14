import { SlideActions } from '../../actions';

export default function slides(state = null, action) {
  switch (action.type) {
    case SlideActions.INCREMENT_SLIDE:
      return (state || 0) + 1;
    case SlideActions.DECREMENT_SLIDE:
      let nextState = (state || 0) - 1;
      if(nextState < 0) {
        return 0
      }

      return nextState;
    default:
      return state;
  }
}
