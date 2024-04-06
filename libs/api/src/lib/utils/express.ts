import { errorHandlingMiddleware } from './middleware/errorHandler';
import { getConfigValue } from '@packages/libs/utils';
import express, { Router, Express } from 'express';
import { swaggerDocsMiddleware } from './middleware/swagger';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(getConfigValue('EXPRESS_PORT')) : 3000;

// eslint-disable-next-line no-unused-vars
type RoutesConfigurator = (router: Router) => Router;

const expressConfig = (): Express => {
  const app = express();
  return app.use(express.json());
};

export const configureExpressApp = (routes: RoutesConfigurator): Express => {
  const app = expressConfig();

  const expressRouting = (): Router => {
    app.use('/api-docs', swaggerDocsMiddleware());
    app.use('/', routes(Router()));
    return app;
  };

  const expressLogging = (): Express => {
    app.use(errorHandlingMiddleware);
    app.listen(port, host, () => {
      console.log(`[ ready ] http://${host}:${port}`);
    });
    return app;
  };

  expressRouting();
  expressLogging();
  return app;
};
