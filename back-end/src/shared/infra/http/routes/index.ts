import { Router } from 'express';

import countriesRouter from '@modules/orders/infra/http/routes/countries.routes';
import languagesRouter from '@modules/orders/infra/http/routes/languages.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';

const routes = Router();

routes.use('/countries', countriesRouter);
routes.use('/languages', languagesRouter);
routes.use('/orders', ordersRouter);

export default routes;
