import { JiraIssue } from '../getIssue/Issue';

export const getIssues = async (client): Promise<JiraIssue> => {
  return await client.get(`/rest/api/3/issue/search`);
};
