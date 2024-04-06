import { getConfigValue } from '@packages/libs/utils';
import { initDataAccess } from '@packages/libs/data-access';
import { createAxiosInstance } from '../axiosConfig/axiosConfig';
import { axiosRequest } from '../'; // Adjust the import path as needed

jest.mock('@packages/libs/utils', () => ({
  getConfigValue: jest.fn(),
}));

jest.mock('@packages/libs/data-access', () => ({
  initDataAccess: jest.fn(),
}));

jest.mock('../axiosConfig/axiosConfig', () => ({
  createAxiosInstance: jest.fn(),
}));

const mockRequestFunction = jest.fn();
const mockAxiosInstance = {
  get: mockRequestFunction,
  post: mockRequestFunction,
  delete: mockRequestFunction,
  put: mockRequestFunction,
};

describe('axiosRequest Middleware', () => {
  beforeAll(() => {
    (getConfigValue as jest.Mock).mockImplementation((key) => {
      if (key === 'JIRA_URL') return 'https://jira.example.com';
      if (key === 'JIRA_TOKEN') return 'test_token';
    });

    (createAxiosInstance as jest.Mock).mockResolvedValue(mockAxiosInstance);
    (initDataAccess as jest.Mock).mockImplementation(() => mockAxiosInstance);
  });

  beforeEach(() => {
    mockRequestFunction.mockReset();
  });

  it('handles a GET request and sends response', async () => {
    const req = { method: 'GET', params: {}, query: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    mockRequestFunction.mockResolvedValue({ data: 'response data' });

    await axiosRequest(mockAxiosInstance.get)(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith('response data');
  });

  it('handles a DELETE request and sends a custom message', async () => {
    const req = { method: 'DELETE', params: {}, query: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    await axiosRequest(mockAxiosInstance.delete)(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'ID deleted' });
  });

  it('passes errors to next', async () => {
    const req = { method: 'GET' };
    const res = {};
    const next = jest.fn();
    const error = new Error('Test error');

    mockRequestFunction.mockRejectedValue(error);

    await axiosRequest(mockAxiosInstance.get)(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
