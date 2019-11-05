import { fork } from 'redux-saga/effects';
import answerSheetSagas from './answerSheets';
import coursesSagas from './courses';

export default function* rootSaga() {
  yield fork(answerSheetSagas);
  yield fork(coursesSagas);
}


