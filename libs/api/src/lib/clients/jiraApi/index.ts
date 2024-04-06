import { Router } from 'express';
import { projectRoutes } from './projects';
import { issueRoutes } from './issues';

export const JiraApi = (router: Router) => {
  router.use('/projects', projectRoutes());
  router.use('/issues', issueRoutes());
  return router;
};
