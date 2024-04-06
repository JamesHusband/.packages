import { authInterceptor } from '../';
import { getAuthToken } from '../authProvider/authProvider';

jest.mock('../authProvider/authProvider', () => ({
  getAuthToken: jest.fn(),
}));

describe('authInterceptor', () => {
  it('should add Authorization header when authToken is present', async () => {
    const token = 'test_token';
    const expectedAuthToken = 'expected_auth_token';
    (getAuthToken as jest.Mock).mockResolvedValue(expectedAuthToken);

    const mockConfig = { headers: {} };
    const interceptor = authInterceptor(token);

    const resultConfig = await interceptor(mockConfig);

    expect(getAuthToken).toHaveBeenCalledWith(token);
    expect(resultConfig.headers['Authorization']).toEqual(
      `Basic ${expectedAuthToken}`
    );
  });

  it('should not add Authorization header when authToken is not present', async () => {
    const token = 'test_token';
    (getAuthToken as jest.Mock).mockResolvedValue(null);

    const mockConfig = { headers: {} };
    const interceptor = authInterceptor(token);

    const resultConfig = await interceptor(mockConfig);

    expect(getAuthToken).toHaveBeenCalledWith(token);
    expect(resultConfig.headers['Authorization']).toBeUndefined();
  });
});
