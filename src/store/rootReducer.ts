/** @format */

import { combineReducers, Reducer } from 'redux';
import { EmployeeReducer, EmployeeState } from './employee';

export interface ApplicationState {
  employee: EmployeeState;
}


export const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({ employee: EmployeeReducer });

export default rootReducer;
