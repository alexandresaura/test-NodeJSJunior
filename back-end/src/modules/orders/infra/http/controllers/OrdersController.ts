import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      first_name,
      last_name,
      email,
      phone,
      language_id,
      country_id,
      billing_address_line1,
      billing_address_line2,
      billing_city,
      billing_state,
      billing_zip_code,
      billing_address_same_shipping_address,
      shipping_address_line1,
      shipping_address_line2,
      shipping_city,
      shipping_state,
      shipping_zip_code,
      need_cut_off_device,
      will_trackers_be_installed_on_bike_truck_machinery,
      need_identify_fleet_drivers,
      quantity,
    } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      first_name,
      last_name,
      email,
      phone,
      language_id,
      country_id,
      billing_address_line1,
      billing_address_line2,
      billing_city,
      billing_state,
      billing_zip_code,
      billing_address_same_shipping_address,
      shipping_address_line1,
      shipping_address_line2,
      shipping_city,
      shipping_state,
      shipping_zip_code,
      need_cut_off_device,
      will_trackers_be_installed_on_bike_truck_machinery,
      need_identify_fleet_drivers,
      quantity,
    });

    return response.json(order);
  }
}

export default OrdersController;
