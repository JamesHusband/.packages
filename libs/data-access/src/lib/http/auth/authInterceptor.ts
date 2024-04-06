import { getAuthToken } from './authProvider';

export const authInterceptor = (token: string) => async (config) => {
  const authToken = await getAuthToken(token);

  if (authToken) {
    config.headers['Authorization'] = `Basic ${authToken}`;
  }

  return config;
};
