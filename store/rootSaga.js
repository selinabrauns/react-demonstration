import { fork, all } from 'redux-saga/effects';
import commonSaga from './sagas/commonSaga';

export function* rootSaga () {
  yield all([
    fork(commonSaga)
  ])
}