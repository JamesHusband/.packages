import { axiosRequest } from '@packages/libs/data-access';
import { getProject as getProjectHandler } from './getProject/getProject';
import { getProjects as getProjectsHandler } from './getProjects/getProjects';
import { createProject as createProjectHandler } from './createProject/createProject';
import { deleteProject as deleteProjectHandler } from './deleteProject/deleteProject';
import { updateProject as updateProjectHandler } from './updateProject/updateProject';

export const getProject = axiosRequest(getProjectHandler);
export const getProjects = axiosRequest(getProjectsHandler);
export const createProject = axiosRequest(createProjectHandler);
export const deleteProject = axiosRequest(deleteProjectHandler);
export const updateProject = axiosRequest(updateProjectHandler);
