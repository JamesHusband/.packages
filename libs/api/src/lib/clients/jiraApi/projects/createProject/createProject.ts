import { Project } from '../getProject/Project';

export const createProject = async (client, post): Promise<Project> =>
  await client.post(`rest/api/3/project/`, post.body);
