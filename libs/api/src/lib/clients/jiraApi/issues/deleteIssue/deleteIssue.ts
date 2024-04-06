import { JiraIssue } from '../getIssue/Issue';

export const deleteIssue = async (client, { params }): Promise<JiraIssue> =>
  await client.del(`/rest/api/3/issue/${params.id}`);
