/** @format */

import {
  EmployeeActionTypes,
  EmployeeAction,
  EmployeeState,
} from './types';

export const actionGetEmployee = (
): EmployeeAction => ({
  type: EmployeeActionTypes.GET_EMPLOYEE,
});

export const actionGetEmployeeRequest = (
  payload: EmployeeState,
): EmployeeAction => ({
  type: EmployeeActionTypes.GET_EMPLOYEE_REQUEST,
  payload,
});

export const actionGetEmployeeSuccess = (
  payload: EmployeeState,
): EmployeeAction => ({
  type: EmployeeActionTypes.GET_EMPLOYEE_SUCCESS,
  payload,
});

export const actionGetEmployeeFailure = (
  payload: EmployeeState,
): EmployeeAction => ({
  type: EmployeeActionTypes.GET_EMPLOYEE_FAILURE,
  payload,
});
