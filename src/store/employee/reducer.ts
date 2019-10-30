/** @format */

import { Reducer } from 'redux';
import {
  EmployeeActionTypes,
  EmployeeState,
  EmployeeAction,
} from './types';
import { createReducer } from '../utils/helpers/reducerHelper';

const initialState: EmployeeState = {
  data: [],
  isLoaded: false,
  isLoading: false,
  errors: [],
};

const request = (
  state: EmployeeState,
  action: EmployeeAction,
) => ({
  ...state,
  ...action.payload,
});

const success = (
  state: EmployeeState,
  action: EmployeeAction,
) => ({
  ...state,
  ...action.payload,
});

const failure = (
  state: EmployeeState,
  action: EmployeeAction,
) => ({
  ...state,
  ...action.payload,
});

const reducer: Reducer<EmployeeState> = createReducer(
  initialState,
  {
    [EmployeeActionTypes.GET_EMPLOYEE_REQUEST]: request,
    [EmployeeActionTypes.GET_EMPLOYEE_SUCCESS]: success,
    [EmployeeActionTypes.GET_EMPLOYEE_FAILURE]: failure,
  },
);

export { reducer as EmployeeReducer };
