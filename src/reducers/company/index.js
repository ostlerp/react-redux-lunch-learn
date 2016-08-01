import { CompanyActions } from '../../actions';

export default function company(state = null, action) {
  switch (action.type) {
    case CompanyActions.FETCH_COMPANY:
      return {fetching: true};
    case CompanyActions.RECEIVE_COMPANY:
      return action.company;
    default:
      return state;
  }
}
