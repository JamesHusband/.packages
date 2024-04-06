export const initDataAccess = async (client) => {
  return {
    get: async (url, params = {}) => client.get(url, params),
    post: async (url, body) => client.post(url, body),
    del: async (url) => client.delete(url),
    put: async (url, body) => client.put(url, body),
  };
};
