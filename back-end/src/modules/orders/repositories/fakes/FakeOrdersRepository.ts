import { uuid } from 'uuidv4';

import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '@modules/orders/infra/typeorm/entities/Order';

import IOrdersRepository from '../IOrdersRepository';

class FakeOrdersRepository implements IOrdersRepository {
  private orders: Order[] = [];

  public async create({
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
  }: ICreateOrderDTO): Promise<Order> {
    const order = new Order();

    Object.assign(order, {
      id: uuid(),
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

    this.orders.push(order);

    return order;
  }
}

export default FakeOrdersRepository;
