import { Project } from '../getProject/Project';

export const updateProject = async (
  client,
  { params, body }
): Promise<Project> =>
  await client.put(`rest/api/3/project/${params.id}`, body);
