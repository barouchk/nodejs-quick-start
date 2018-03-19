import { Router } from 'express';
import * as HomeController from './controller';

const routes = new Router();

routes.get('/home', HomeController.homePage);

export default routes;