import CombineReducers from './combineReducers';
import slide from './slide';
import user from './user';

const appReducer = CombineReducers({
  slide,
  user
});

export default appReducer;
