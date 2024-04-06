import * as express from 'express';
import path = require('path');
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

export const swaggerDocsMiddleware = () => {
  const router = express.Router();
  const swaggerFilePath = path.resolve(
    process.cwd(),
    './libs/api/src/lib/clients/jiraApi/schema/api.schema.yaml'
  );

  try {
    const swaggerDocument = YAML.load(swaggerFilePath);
    router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  } catch (error) {
    console.error('Error loading Swagger Schema:', error);
  }

  return router;
};
