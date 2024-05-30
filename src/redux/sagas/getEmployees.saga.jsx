import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getEmployeesSaga() {
  yield takeLatest('GET_EMPLOYEES_SAGA', getEmployees);
}

function* getEmployees(action) {
  try {
    const employees = yield axios.get(`/api/directory/${action.payload}`);
    yield put({ type: 'GET_EMPLOYEES', payload: employees.data });
  } catch (error) {
    console.log('Error with getEmployeesSaga:', error);
  }
}

export default getEmployeesSaga;
