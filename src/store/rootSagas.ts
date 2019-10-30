/** @format */

// #region IMPORT
import { takeLatest } from 'redux-saga/effects';
import { EmployeeActionTypes, EmployeeAction, sagas } from './employee';

// #endregion


export default function* rootSaga() {
  yield takeLatest(
      EmployeeActionTypes.GET_EMPLOYEE,
      (action: EmployeeAction) => sagas(action),
  );

}
