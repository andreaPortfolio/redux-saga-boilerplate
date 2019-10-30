/** @format */

// #region IMPORT
import { fetch } from './utils/fetch';

import { EMPLOYEE_URL } from './utils/costants/urls';
// #endregion


// #region API ::: FETCH BANK LIST
export const apiGetEmployee = async <T>(
): Promise<T> => {
  // return fetch.post(`${baseUrl}${BASE_URL}`, params);
  return fetch.get(`${EMPLOYEE_URL}`);
};
// #endregion
