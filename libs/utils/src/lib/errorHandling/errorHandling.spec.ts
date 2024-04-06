import * as utils from '@packages/libs/utils';
import { handleError, extractAxiosErrorDetails } from './errorHandling';
jest.mock('@packages/libs/utils', () => ({
  logger: {
    error: jest.fn(),
  },
}));

describe('errorHandling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('handleError with AxiosError', () => {
    it('should log detailed Axios error and throw an error', () => {
      const mockAxiosError = {
        isAxiosError: true,
        message: 'Request failed',
        response: {
          status: 404,
          statusText: 'Not Found',
          data: 'Not found',
        },
        config: {
          url: 'https://example.com',
        },
      };

      expect(() => handleError(mockAxiosError, 'Test Context')).toThrow(
        'Test Context: Request failed'
      );
      expect(utils.logger.error).toHaveBeenCalledWith(
        `Axios error in Test Context: Request failed [404 Not Found]`,
        {
          url: 'https://example.com',
          status: 404,
          statusText: 'Not Found',
          data: 'Not found',
        }
      );
    });
  });

  describe('handleError with generic error', () => {
    it('should log generic error and throw an error', () => {
      const mockError = new Error('Generic error');
      mockError.stack = 'Error stack trace';

      expect(() => handleError(mockError, 'Generic Context')).toThrow(
        'Generic Context: Generic error'
      );
      expect(utils.logger.error).toHaveBeenCalledWith(
        `Error in Generic Context: Generic error`,
        {
          errorData: undefined,
          stack: 'Error stack trace',
        }
      );
    });
  });

  describe('extractAxiosErrorDetails', () => {
    it('should extract details from an Axios error', () => {
      const mockAxiosError = {
        isAxiosError: true,
        message: 'Request failed',
        response: {
          status: 404,
          statusText: 'Not Found',
          data: 'Not found',
        },
        config: {
          url: 'https://example.com',
        },
      };

      const details = extractAxiosErrorDetails(mockAxiosError);
      expect(details).toEqual({
        message: 'Request failed',
        status: 404,
        statusText: 'Not Found',
        url: 'https://example.com',
        data: 'Not found',
      });
    });

    it('should return null for non-Axios errors', () => {
      const mockError = new Error('Generic error');
      const details = extractAxiosErrorDetails(mockError);
      expect(details).toBeNull();
    });
  });
});
