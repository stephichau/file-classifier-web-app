import { call, put, takeLatest } from 'redux-saga/effects'
import API from './apis';
import actions from './actions';

function* getUsers(){
  try {
    const response = yield call(API.reqres.getUsers);
    yield put({ type: actions.reqres.GET_USERS_SUCCESS, users: response.data.data });
  } catch (error) {
    yield put({ type: actions.reqres.GET_USERS_FAILURE, error });
  }
}

function* getColors(){
  try {
    const response = yield call(API.reqres.getColors);
    yield put({ type: actions.reqres.GET_COLORS_SUCCESS, colors: response.data.data });
  } catch (error) {
    yield put({ type: actions.reqres.GET_COLORS_FAILURE, error });
  }
}

function* sagas() {
  yield takeLatest(actions.reqres.GET_USERS_REQUEST, getUsers);
  yield takeLatest(actions.reqres.GET_COLORS_REQUEST, getColors);
}

export default sagas;