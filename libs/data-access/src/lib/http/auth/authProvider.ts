export const getAuthToken = async (token: string) => {
  return Buffer.from(token).toString('base64');
};
