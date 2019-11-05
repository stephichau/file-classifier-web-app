import { call, put, takeLatest } from 'redux-saga/effects'
import API from '../apis';
import actions from '../actions';
const {
  answerSheet: {
    POST_ANSWER_SHEET_REQUEST,
    POST_ANSWER_SHEET_SUCCESS,
    POST_ANSWER_SHEET_FAILURE,
  },
} = actions;

function* postAnswerSheets(action) {
  try {
    const response = yield call(API.answerSheets.post, action.props);
    yield put({
      type: POST_ANSWER_SHEET_SUCCESS,
      payload: 200,
    });
  } catch (e) {
    yield put({
      type: POST_ANSWER_SHEET_FAILURE,
      error: 'Hubo un problema. Intente nuevamente.',
    });
  }
}

export default function* answerSheetSagas() {
  yield takeLatest(POST_ANSWER_SHEET_REQUEST, postAnswerSheets);
}