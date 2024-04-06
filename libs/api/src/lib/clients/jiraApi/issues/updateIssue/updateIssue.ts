import { JiraIssue } from '../getIssue/Issue';

export const updateIssue = async (
  client,
  { params, body }
): Promise<JiraIssue> =>
  await client.put(`rest/api/3/project/${params.id}`, body);
