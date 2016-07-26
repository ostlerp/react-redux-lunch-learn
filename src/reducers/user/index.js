import { UserActions } from '../../actions';

export default function user(state = null, action) {
  switch (action.type) {
    case UserActions.FETCH_USER:
      return { fetching: true };
    case UserActions.RECEIVE_USER:
      return action.user;
    case UserActions.FETCH_COMPANY:
      return { fetching: true };
      case UserActions.RECEIVE_COMPANY:
        return action.company;
    default:
      return state;
  }
}
