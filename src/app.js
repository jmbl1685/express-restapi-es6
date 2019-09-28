'use strict';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swagger';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}

app.use(helmet());
app.use(express.static(__dirname + '/src/public'));

/* Swagger */
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));
app.get('/', (req, res, next) => res.redirect('api-docs'));

/* Routes */

import valueRoutes from './routes/values';

app.use('/', valueRoutes);

export default app;
