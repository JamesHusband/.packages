import axios from 'axios';
import { authInterceptor } from '../../../auth';
import { createAxiosInstance } from '../';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('../../../auth', () => ({
  authInterceptor: jest.fn(() => jest.fn()),
}));

describe('createAxiosInstance', () => {
  it('creates an axios instance with correct baseURL and headers', async () => {
    (mockedAxios as any).create.mockReturnValue({
      interceptors: {
        request: {
          use: jest.fn(),
        },
        response: {
          use: jest.fn(),
        },
      },
    });

    const baseURL = 'https://example.com';
    const token = 'testToken';

    const instance = await createAxiosInstance(baseURL, token);

    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(authInterceptor).toHaveBeenCalledWith(token);
    expect(instance.interceptors.request.use).toHaveBeenCalled();
  });
});
