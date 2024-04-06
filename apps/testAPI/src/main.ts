import express from 'express';

import {
  getProject,
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from '@packages/libs/api';
import { errorHandlingMiddleware } from '@packages/libs/data-access';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(express.json());

app.get('/projects', getProjects);
app.get('/projects/:id', getProject);
app.post('/projects', createProject);
app.put('/projects/:id', updateProject);
app.delete('/projects/:id', deleteProject);

app.use(errorHandlingMiddleware);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
