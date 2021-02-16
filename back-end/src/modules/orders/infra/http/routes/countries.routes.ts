import { Router } from 'express';

import CountriesController from '../controllers/CountriesController';

const countriesRouter = Router();
const countriesController = new CountriesController();

countriesRouter.get('/', countriesController.index);

export default countriesRouter;
