import { combineReducers } from 'redux';

import global from './global'
import reqres from './reqres';

export default combineReducers({
  global,
  reqres
});