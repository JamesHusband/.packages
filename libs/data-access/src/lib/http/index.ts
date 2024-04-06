import { createAxiosInstance } from './axios/axiosConfig';

import * as httpCrud from './httpCrud';

export const initDataAccess = async (baseURL: string, token: string) => {
  const axios = await createAxiosInstance(baseURL, token);

  return {
    get: async (url, params = {}) => httpCrud.get(axios.get, url, params),
    post: async (url, body) => httpCrud.post(axios.post, url, body),
    del: async (url) => httpCrud.del(axios.delete, url),
    put: async (url, body) => httpCrud.update(axios.put, url, body),
  };
};
