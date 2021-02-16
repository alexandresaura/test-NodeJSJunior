import { container } from 'tsyringe';

import CountriesRepository from '@modules/orders/infra/typeorm/repositories/CountriesRepository';
import LanguagesRepository from '@modules/orders/infra/typeorm/repositories/LanguagesRepository';
import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import ICountriesRepository from '@modules/orders/repositories/ICountriesRepository';
import ILanguagesRepository from '@modules/orders/repositories/ILanguagesRepository';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';

container.registerSingleton<ICountriesRepository>(
  'CountriesRepository',
  CountriesRepository,
);

container.registerSingleton<ILanguagesRepository>(
  'LanguagesRepository',
  LanguagesRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
