import { getAuthToken } from './authProvider';

describe('getAuthToken', () => {
  it('should correctly encode the token to base64', async () => {
    const token = 'test_token';
    const expectedEncodedToken = Buffer.from(token).toString('base64');

    const encodedToken = await getAuthToken(token);

    expect(encodedToken).toEqual(expectedEncodedToken);
  });

  it('should handle empty string tokens', async () => {
    const token = '';
    const expectedEncodedToken = Buffer.from(token).toString('base64');

    const encodedToken = await getAuthToken(token);

    expect(encodedToken).toEqual(expectedEncodedToken);
  });

  it('should handle special characters in tokens', async () => {
    const token = 'special!@#$%^&*()_+{}|:"<>?`~-=[]\\;\',./';
    const expectedEncodedToken = Buffer.from(token).toString('base64');

    const encodedToken = await getAuthToken(token);

    expect(encodedToken).toEqual(expectedEncodedToken);
  });
});
