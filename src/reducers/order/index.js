import { OrderActions } from '../../actions';

export default function order(state = null, action) {
  switch (action.type) {
    case OrderActions.FETCH_ORDER:
      return {fetching: true};
    case OrderActions.RECEIVE_ORDER:
      return action.order;
    default:
      return state;
  }
}
