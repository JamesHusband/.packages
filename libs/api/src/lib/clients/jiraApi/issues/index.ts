import { Router } from 'express';
import { axiosRequest } from '../../../utils/axios';
import { getIssue } from './getIssue';
import { createIssue } from './createIssue';
import { createIssues } from './createIssues';
import { updateIssue } from './updateIssue';
import { deleteIssue } from './deleteIssue';
const router = Router();

export const issueRoutes = () => {
  router.get('/:id', axiosRequest(getIssue));
  router.post('/', axiosRequest(createIssue));
  router.post('/bulk', axiosRequest(createIssues));
  router.put('/:id', axiosRequest(updateIssue));
  router.delete('/:id', axiosRequest(deleteIssue));

  return router;
};
