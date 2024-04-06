import { errorHandlingMiddleware } from './errorHandler'; // Adjust the import path as needed

describe('errorHandlingMiddleware', () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const _next = jest.fn(); // Mock next function, although it won't be used here

  it('handles operational errors with custom status codes', () => {
    const operationalError = {
      isOperational: true,
      statusCode: 400,
      message: 'Operational error occurred',
    };

    errorHandlingMiddleware(operationalError, null, res, _next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Operational error occurred',
    });
  });

  it('handles non-operational errors with a 500 status code', () => {
    const nonOperationalError = new Error('Unexpected error occurred');

    errorHandlingMiddleware(nonOperationalError, null, res, _next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Unexpected error occurred',
    });
  });

  it('handles operational errors without a specified status code using 500', () => {
    const operationalErrorWithoutStatusCode = {
      isOperational: true,
      message: 'Operational error without status code',
    };

    errorHandlingMiddleware(
      operationalErrorWithoutStatusCode,
      null,
      res,
      _next
    );

    // Assuming your implementation defaults to 500 when no statusCode is provided
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Operational error without status code',
    });
  });
});
