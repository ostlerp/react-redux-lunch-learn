import { SettingsActions } from '../../actions';

export default function settings(state = null, action) {
  switch (action.type) {
    case SettingsActions.POPULATE_SETTINGS:
      return 'Hey, Jimbobby';
    default:
      return state;
  }
}
