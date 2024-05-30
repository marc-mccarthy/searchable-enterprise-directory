import { all } from 'redux-saga/effects';
import getEmployeesSaga from './getEmployees.saga';
import loginSaga from './login.saga';

export default function* rootSaga() {
  yield all([getEmployeesSaga(), loginSaga()]);
}
