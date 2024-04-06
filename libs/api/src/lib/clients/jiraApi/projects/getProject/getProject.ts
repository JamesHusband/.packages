import { Project } from '../..';

export const getProject = async (client, { params }): Promise<Project> =>
  await client.get(`rest/api/3/project/${params.id}`);
