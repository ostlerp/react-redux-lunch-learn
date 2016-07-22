import { UserActions } from '../../actions';

export default function user(state = null, action) {
  switch (action.type) {
    case UserActions.FETCH_USER:
      return { fetching: true };
    case UserActions.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
}
