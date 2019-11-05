import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../apis';
import actions from '../actions';

function* getCourses() {
  try {
    const response = yield call(API.courses.index);
    yield put({ type: actions.courses.GET_COURSES_SUCCESS, payload: response.data.courses });
  } catch (error) {
    const type = actions.courses.GET_COURSES_FAILURE;
    console.log(error);
    yield put({ type, error: 'Error' });
  }
}

export default function* coursesSagas() {
  yield takeLatest(actions.courses.GET_COURSES_REQUEST, getCourses);
}
