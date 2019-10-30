import { combineReducers } from 'redux';
import { History } from 'history';

import { connectRouter, RouterState } from 'connected-react-router';
import {EmployeeReducer, EmployeeState } from './employee';

export interface State {

  router: RouterState,
  employee: EmployeeState

}

export const rootReducer = (history: History)=> combineReducers<State>({
  router: connectRouter(history),
  employee: EmployeeReducer,
});
