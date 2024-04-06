import { initDataAccess } from '../index';

interface EnvConfig {
  JIRA_URL: string;
  JIRA_TOKEN: string;
  // Add other environment variables as needed
}

export const getConfigValue = <K extends keyof EnvConfig>(
  key: K
): EnvConfig[K] | undefined => {
  return process.env[key] as EnvConfig[K];
};

const jiraUrl = getConfigValue('JIRA_URL');
const jiraToken = getConfigValue('JIRA_TOKEN');

export const axiosRequest = (request) => async (req, res, next) => {
  try {
    const response = await request(
      await initDataAccess(jiraUrl, jiraToken),
      req
    );
    if (req.method === 'DELETE') {
      res.status(200).json({ message: 'ID deleted' });
    } else {
      res.status(200).json(response.data);
    }
  } catch (error) {
    next(error);
  }
};
