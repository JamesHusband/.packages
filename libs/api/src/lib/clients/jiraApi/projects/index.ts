import { Router } from 'express';
import { axiosRequest } from '../../../utils/axios';
import { getProject } from './getProject';
import { getProjects } from './getProjects';
import { createProject } from './createProject';
import { updateProject } from './updateProject';
import { deleteProject } from './deleteProject';
const router = Router();

export const projectRoutes = () => {
  router.get('/', axiosRequest(getProjects));
  router.get('/:id', axiosRequest(getProject));
  router.post('/', axiosRequest(createProject));
  router.put('/:id', axiosRequest(updateProject));
  router.delete('/:id', axiosRequest(deleteProject));

  return router;
};
