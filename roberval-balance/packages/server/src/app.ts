import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger';

// Controllers (route handlers)
import * as homeController from './controllers/home';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', homeController.index);


export default app;
