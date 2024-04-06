import { JiraIssue } from './Issue';

export const getIssue = async (client, { params }): Promise<JiraIssue> => {
  return await client.get(`rest/api/3/project/${params.id}`);
};
