/** @format */

import fetchGET from './fetchGET';
import fetchPOST from './fetchPOST';
import fetchDELETE from './fetchDELETE';
import fetchPUT from './fetchPUT';

export interface IFetch {
  get: Function;
  post: Function;
  delete: Function;
  put: Function;
}

export const fetch: IFetch = {
  get: fetchGET,
  post: fetchPOST,
  delete: fetchDELETE,
  put: fetchPUT,
};
