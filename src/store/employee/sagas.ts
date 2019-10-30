/** @format */

import { call, put } from 'redux-saga/effects';


import {Employee, EmployeeAction} from './types';

import { apiGetEmployee } from '../api';
import {
  actionGetEmployeeRequest,
  actionGetEmployeeSuccess,
  actionGetEmployeeFailure,
} from './actions';


export function* sagas(
  action: EmployeeAction,
) {
  yield put(
      actionGetEmployeeRequest({
      data: [],
      isLoading: true,
      isLoaded: false,
      errors: [],
    }),
  );

  try {
    const payload: Employee[] = yield call(
        apiGetEmployee
    );


    return yield put(
      actionGetEmployeeSuccess({
        data: payload,
        isLoaded: true,
        isLoading: false,
        errors: []
      }),
    );
  } catch (error) {
    return yield put(
        actionGetEmployeeFailure({
        data: [],
        isLoaded: false,
        isLoading: false,
        errors: [error],
      }),
    );
  }
}
