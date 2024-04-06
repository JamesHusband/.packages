import { getConfigValue } from '@packages/libs/utils';
import { initDataAccess } from '@packages/libs/data-access';
import { createAxiosInstance } from '../axiosConfig/axiosConfig';

const jiraUrl = getConfigValue('JIRA_URL');
const jiraToken = getConfigValue('JIRA_TOKEN');

export const axiosRequest = (request) => async (req, res, next) => {
  const axios = await createAxiosInstance(jiraUrl, jiraToken);
  try {
    const response = await request(await initDataAccess(axios), req);
    if (req.method === 'DELETE') {
      res.status(200).json({ message: 'ID deleted' });
    } else {
      res.status(200).json(response.data);
    }
  } catch (error) {
    next(error);
  }
};
