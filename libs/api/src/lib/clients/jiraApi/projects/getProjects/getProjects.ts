import { Project } from '../getProject/Project';

export const getProjects = async (client): Promise<Project> => {
  return await client.get(`/rest/api/3/project/search`);
};
