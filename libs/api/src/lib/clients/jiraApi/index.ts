import { Router } from 'express';
import { projectRoutes } from './projects';

export const JiraApi = (router: Router) => {
  router.use('/projects', projectRoutes());
  return router;
};
