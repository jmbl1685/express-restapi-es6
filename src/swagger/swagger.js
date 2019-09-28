import swaggerJsdoc from 'swagger-jsdoc';
const { version } = require('../../package.json');

/*
  Open API
  - https://swagger.io/docs/specification/about
  - https://swagger.io/specification
*/

const url = 'http://localhost:3000';

const swaggerDefinition = {
  info: {
    contact: {
      email: 'jmbl1685@hotmail.com',
      name: 'Juan Batty',
    },
    description: 'Custom structure to build an REST API using Express.js',
    license: {
      name: 'All Rights Reserved',
    },
    title: 'Custom structure to build an REST API using Express.js',
    version,
  },
  openapi: '3.0.0',
  produces: ['application/json'],
  servers: [{ url }],
  tags: [
    {
      description: 'Values',
      name: 'Values',
    },
  ],
  'x-tagGroups': [
    {
      name: 'General',
      tags: ['Values'],
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        bearerFormat: 'JWT',
        scheme: 'bearer',
        type: 'http',
      },
    },
  },
};

const route = fileName => `./src/routes/${fileName}.js`;

const apis = [route('values')];

const options = {
  apis,
  basePath: '/',
  swaggerDefinition,
};

export const swaggerSpec = swaggerJsdoc(options);
