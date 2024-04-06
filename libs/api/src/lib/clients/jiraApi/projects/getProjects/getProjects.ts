import { Project } from '../..';

export const getProjects = async (client): Promise<Project> =>
  await client.get(`/rest/api/3/project/search`);
