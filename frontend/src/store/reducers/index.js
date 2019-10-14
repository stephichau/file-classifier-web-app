import { combineReducers } from 'redux';

import global from './global';
import modal from './modal';
import generic from './generic';

export default combineReducers({
  global,
  modal,
  generic,
});