import { PostActions } from '../../actions';

export default function post(state = null, action) {
  switch (action.type) {
    case PostActions.FETCH_POST:
      return { fetching: true };
    case PostActions.RECEIVE_POST:
      return action.post;
    default:
      return state;
  }
}
