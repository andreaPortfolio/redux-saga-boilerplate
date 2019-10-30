/** @format */


export interface EmployeeState {
  readonly data: Employee[];
  readonly isLoaded: boolean;
  readonly isLoading: boolean;
  readonly errors: string[] | null;
}

export interface EmployeeAction {
  type: EmployeeActionTypes;
  payload?: EmployeeState;
  errors?: string[];
}





export enum EmployeeActionTypes {
  GET_EMPLOYEE = 'trigger/GET_EMPLOYEE',
  GET_EMPLOYEE_REQUEST = 'event/GET_EMPLOYEE_REQUEST',
  GET_EMPLOYEE_SUCCESS = 'event/GET_EMPLOYEE_SUCCESS',
  GET_EMPLOYEE_FAILURE = 'event/GET_EMPLOYEE_FAILURE',
}




export interface Employee {
  "id": string,
  "employee_name": string,
  "employee_salary": string,
  "employee_age": string,
  "profile_image": string
}
