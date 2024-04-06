import { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {};

export const get = (req, route, axiosConfig) => req(route, axiosConfig);
export const del = (req, route) => req(route);
export const post = (req, route, body) => req(route, body);
export const update = (req, route, body) => req(route, body);
