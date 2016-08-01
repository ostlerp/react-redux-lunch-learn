import { ReportActions } from '../../actions';

export default function report(state = null, action) {
  switch (action.type) {
    case ReportActions.FETCH_REPORT:
      return { fetching: true };
    case ReportActions.RECEIVE_REPORT:
      return action.report;
    default:
      return state;
  }
}