import { JiraIssue } from '../getIssue/Issue';

export const createIssue = async (client, post): Promise<JiraIssue> =>
  await client.post(`rest/api/3/issue/`, post.body);
