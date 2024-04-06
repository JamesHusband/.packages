export type Success<T> = {
  type: 'success';
  data: T;
};

export type Failure = {
  type: 'failure';
  error: Error;
};

export type ServerError = {
  type: 'serverError';
  status: number;
  data?: any;
};

export type HttpResponse<T> = Success<T> | Failure | ServerError;
