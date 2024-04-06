import axios from 'axios';
import { authInterceptor } from '../auth';

export const createAxiosInstance = async (baseURL: string, token: string) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const auth = authInterceptor(token);

  axiosInstance.interceptors.request.use(auth);

  return axiosInstance;
};
