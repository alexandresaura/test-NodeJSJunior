import FakeCountriesRepository from '@modules/orders/repositories/fakes/FakeCountriesRepository';
import FakeLanguagesRepository from '@modules/orders/repositories/fakes/FakeLanguagesRepository';
import FakeOrdersRepository from '@modules/orders/repositories/fakes/FakeOrdersRepository';
import CreateOrderService from '@modules/orders/services/CreateOrderService';
import AppError from '@shared/errors/AppError';

let fakeCountriesRepository: FakeCountriesRepository;
let fakeLanguagesRepository: FakeLanguagesRepository;
let fakeOrdersRepository: FakeOrdersRepository;
let createOrder: CreateOrderService;

describe('CreateOrder', () => {
  beforeEach(() => {
    fakeCountriesRepository = new FakeCountriesRepository();
    fakeLanguagesRepository = new FakeLanguagesRepository();
    fakeOrdersRepository = new FakeOrdersRepository();
    createOrder = new CreateOrderService(
      fakeOrdersRepository,
      fakeCountriesRepository,
      fakeLanguagesRepository,
    );
  });

  it('should be able to create an order', async () => {
    const order1 = await createOrder.execute({
      first_name: 'João',
      last_name: 'Silva',
      email: 'joaosilva@email.com',
      phone: '11435624564',
      language_id: '2',
      country_id: '1',

      billing_address_line1: 'Rua Barão, 192',
      billing_address_line2: 'Rua Manuel, 432',
      billing_city: 'Santos',
      billing_state: 'São Paulo',
      billing_zip_code: '14395-903',
      billing_address_same_shipping_address: true,

      need_cut_off_device: false,
      will_trackers_be_installed_on_bike_truck_machinery: true,
      need_identify_fleet_drivers: false,
      quantity: 4,
    });

    const order2 = await createOrder.execute({
      first_name: 'João',
      last_name: 'Silva',
      email: 'joaosilva@email.com',
      phone: '11435624564',
      language_id: '2',
      country_id: '1',

      billing_address_line1: 'Rua Barão, 192',
      billing_city: 'Santos',
      billing_state: 'São Paulo',
      billing_zip_code: '14395-903',
      billing_address_same_shipping_address: true,

      need_cut_off_device: false,
      will_trackers_be_installed_on_bike_truck_machinery: true,
      need_identify_fleet_drivers: false,
      quantity: 4,
    });

    const order3 = await createOrder.execute({
      first_name: 'João',
      last_name: 'Silva',
      email: 'joaosilva@email.com',
      phone: '11435624564',
      language_id: '2',
      country_id: '1',

      billing_address_line1: 'Rua Barão, 192',
      billing_city: 'Santos',
      billing_state: 'São Paulo',
      billing_zip_code: '14395-903',
      billing_address_same_shipping_address: false,

      shipping_address_line1: 'Rua Antônio, 195',
      shipping_address_line2: 'Rua Areia Branca, 54',
      shipping_city: 'São Vicente',
      shipping_state: 'São Paulo',
      shipping_zip_code: '15644-987',

      need_cut_off_device: false,
      will_trackers_be_installed_on_bike_truck_machinery: true,
      need_identify_fleet_drivers: false,
      quantity: 4,
    });

    const order4 = await createOrder.execute({
      first_name: 'João',
      last_name: 'Silva',
      email: 'joaosilva@email.com',
      phone: '11435624564',
      language_id: '2',
      country_id: '1',

      billing_address_line1: 'Rua Barão, 192',
      billing_city: 'Santos',
      billing_state: 'São Paulo',
      billing_zip_code: '14395-903',
      billing_address_same_shipping_address: false,

      shipping_address_line1: 'Rua Antônio, 195',
      shipping_city: 'São Vicente',
      shipping_state: 'São Paulo',
      shipping_zip_code: '15644-987',

      need_cut_off_device: false,
      will_trackers_be_installed_on_bike_truck_machinery: true,
      need_identify_fleet_drivers: false,
      quantity: 4,
    });

    expect(order1).toHaveProperty('id');
    expect(order2).toHaveProperty('id');
    expect(order3).toHaveProperty('id');
    expect(order4).toHaveProperty('id');
  });

  it('should not be able to create an order without a valid country', async () => {
    await expect(
      createOrder.execute({
        first_name: 'João',
        last_name: 'Silva',
        email: 'joaosilva@email.com',
        phone: '11435624564',
        language_id: '2',
        country_id: '45',

        billing_address_line1: 'Rua Barão, 192',
        billing_address_line2: 'Rua Manuel, 432',
        billing_city: 'Santos',
        billing_state: 'São Paulo',
        billing_zip_code: '14395-903',
        billing_address_same_shipping_address: true,

        need_cut_off_device: false,
        will_trackers_be_installed_on_bike_truck_machinery: true,
        need_identify_fleet_drivers: false,
        quantity: 4,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an order without a valid language', async () => {
    await expect(
      createOrder.execute({
        first_name: 'João',
        last_name: 'Silva',
        email: 'joaosilva@email.com',
        phone: '11435624564',
        language_id: '49',
        country_id: '1',

        billing_address_line1: 'Rua Barão, 192',
        billing_address_line2: 'Rua Manuel, 432',
        billing_city: 'Santos',
        billing_state: 'São Paulo',
        billing_zip_code: '14395-903',
        billing_address_same_shipping_address: true,

        need_cut_off_device: false,
        will_trackers_be_installed_on_bike_truck_machinery: true,
        need_identify_fleet_drivers: false,
        quantity: 4,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
