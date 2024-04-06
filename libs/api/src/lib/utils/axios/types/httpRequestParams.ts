import { AxiosRequestConfig } from 'axios';

export interface HttpRequestParams<T> {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';
  data?: T;
  config?: AxiosRequestConfig;
}
