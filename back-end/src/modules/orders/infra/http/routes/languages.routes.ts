import { Router } from 'express';

import LanguagesController from '../controllers/LanguagesController';

const languagesRouter = Router();
const languagesController = new LanguagesController();

languagesRouter.get('/', languagesController.index);

export default languagesRouter;
