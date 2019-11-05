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

function* postCourse({ props }) {
  try {
    const response = yield call(API.courses.post, props);
    yield put({ type: actions.courses.POST_COURSE_SUCCESS, payload: response.data.course });
  } catch (error) {
    const type = actions.courses.POST_COURSE_FAILURE;
    console.log(error);
    yield put({ type, error: 'Error' });
  }
}

function* getCourse({ props }) {
  try {
    const response = yield call(API.courses.get, props);
    yield put({ type: actions.courses.GET_COURSE_SUCCESS, payload: response.data.course });
  } catch (error) {
    const type = actions.courses.GET_COURSE_FAILURE;
    console.log(error);
    yield put({ type, error: 'Error' });
  }
}

export default function* coursesSagas() {
  yield takeLatest(actions.courses.GET_COURSES_REQUEST, getCourses);
  yield takeLatest(actions.courses.POST_COURSE_REQUEST, postCourse);
  yield takeLatest(actions.courses.GET_COURSE_REQUEST, getCourse);
}
