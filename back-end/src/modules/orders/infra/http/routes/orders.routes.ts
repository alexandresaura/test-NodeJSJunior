import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post(
  '/',
  celebrate(
    {
      [Segments.BODY]: {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        language_id: Joi.string().uuid().required(),
        country_id: Joi.string().uuid().required(),
        billing_address_line1: Joi.string().required(),
        billing_address_line2: Joi.string().allow(''),
        billing_city: Joi.string().required(),
        billing_state: Joi.string().required(),
        billing_zip_code: Joi.string().required(),
        billing_address_same_shipping_address: Joi.boolean().required(),
        shipping_address_line1: Joi.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: Joi.required(),
          },
        ),
        shipping_address_line2: Joi.string().allow(''),
        shipping_city: Joi.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: Joi.required(),
          },
        ),
        shipping_state: Joi.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: Joi.required(),
          },
        ),
        shipping_zip_code: Joi.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: Joi.required(),
          },
        ),
        need_cut_off_device: Joi.boolean().required(),
        will_trackers_be_installed_on_bike_truck_machinery: Joi.boolean().required(),
        need_identify_fleet_drivers: Joi.boolean().required(),
        quantity: Joi.number().integer().positive().required(),
      },
    },
    { abortEarly: false },
  ),
  ordersController.create,
);

export default ordersRouter;
