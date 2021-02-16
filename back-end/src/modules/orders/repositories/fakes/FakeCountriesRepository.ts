import Country from '@modules/orders/infra/typeorm/entities/Country';

import ICountriesRepository from '../ICountriesRepository';

class FakeCountriesRepository implements ICountriesRepository {
  private countries: Country[] = [];

  constructor() {
    const country1 = new Country();
    Object.assign(country1, {
      id: '1',
      name: 'country1',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    const country2 = new Country();
    Object.assign(country2, {
      id: '2',
      name: 'country2',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    const country3 = new Country();
    Object.assign(country3, {
      id: '3',
      name: 'country3',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    this.countries.push(...[country1, country2, country3]);
  }

  public async findAll(): Promise<Country[]> {
    return [...this.countries];
  }

  public async findById(id: string): Promise<Country | undefined> {
    const country = this.countries.find(c => c.id === id);

    return country;
  }
}

export default FakeCountriesRepository;
