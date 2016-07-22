import CombineReducers from './combineReducers';
import slide from './slide';
import user from './user';
import company from './company';
import order from './order';
import report from './report';
import settings from './settings';

const appReducer = CombineReducers({
  slide,
  user,
  company,
  order,
  report,
  settings
});

export default appReducer;
