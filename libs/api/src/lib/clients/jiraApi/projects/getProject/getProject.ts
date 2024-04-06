import { Project } from './Project';

export const getProject = async (client, { params }): Promise<Project> => {
  return await client.get(`rest/api/3/project/${params.id}`);
};
