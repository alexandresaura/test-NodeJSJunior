import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Order from '../infra/typeorm/entities/Order';
import ICountriesRepository from '../repositories/ICountriesRepository';
import ILanguagesRepository from '../repositories/ILanguagesRepository';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  language_id: string;
  country_id: string;
  billing_address_line1: string;
  billing_address_line2?: string;
  billing_city: string;
  billing_state: string;
  billing_zip_code: string;
  billing_address_same_shipping_address: boolean;
  shipping_address_line1?: string;
  shipping_address_line2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_zip_code?: string;
  need_cut_off_device: boolean;
  will_trackers_be_installed_on_bike_truck_machinery: boolean;
  need_identify_fleet_drivers: boolean;
  quantity: number;
}

@injectable()
class CreateOrderService {
  private ordersRepository: IOrdersRepository;

  private countriesRepository: ICountriesRepository;

  private languagesRepository: ILanguagesRepository;

  constructor(
    @inject('OrdersRepository') ordersRepository: IOrdersRepository,
    @inject('CountriesRepository') countriesRepository: ICountriesRepository,
    @inject('LanguagesRepository') languagesRepository: ILanguagesRepository,
  ) {
    this.ordersRepository = ordersRepository;
    this.countriesRepository = countriesRepository;
    this.languagesRepository = languagesRepository;
  }

  public async execute({
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
  }: IRequest): Promise<Order> {
    const country = await this.countriesRepository.findById(country_id);
    if (!country) {
      throw new AppError('Country not found.');
    }

    const language = await this.languagesRepository.findById(language_id);
    if (!language) {
      throw new AppError('Language not found.');
    }

    let order: Order;

    if (billing_address_same_shipping_address) {
      order = await this.ordersRepository.create({
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
        need_cut_off_device,
        will_trackers_be_installed_on_bike_truck_machinery,
        need_identify_fleet_drivers,
        quantity,
      });
    } else {
      order = await this.ordersRepository.create({
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
    }

    return order;
  }
}

export default CreateOrderService;
