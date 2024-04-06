import { logger } from '@packages/libs/utils';
import axios from 'axios';

export const extractAxiosErrorDetails = (error: any) => {
  if (!axios.isAxiosError(error)) {
    return null;
  }

  const message = error.message;
  const status = error.response?.status;
  const statusText = error.response?.statusText;
  const url = error.config?.url;
  const data = error.response?.data;

  return { message, status, statusText, url, data };
};

export const handleError = (error: any, context: string = ''): never => {
  const axiosErrorDetails = extractAxiosErrorDetails(error);

  if (axiosErrorDetails) {
    const { message, status, statusText, url, data } = axiosErrorDetails;
    logger.error(
      `Axios error in ${context}: ${message} [${status} ${statusText}]`,
      { url, status, statusText, data }
    );
  } else {
    logger.error(`Error in ${context}: ${error.message}`, {
      errorData: error.data,
      stack: error.stack,
    });
  }

  throw new Error(`${context}: ${error.message}`);
};
