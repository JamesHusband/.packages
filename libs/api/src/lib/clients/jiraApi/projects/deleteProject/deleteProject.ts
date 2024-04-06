import { Project } from '../getProject/Project';

export const deleteProject = async (client, { params }): Promise<Project> =>
  await client.del(`/rest/api/3/project/${params.id}`);
