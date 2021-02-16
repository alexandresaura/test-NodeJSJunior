import { getRepository, Repository } from 'typeorm';

import ICountriesRepository from '@modules/orders/repositories/ICountriesRepository';

import Country from '../entities/Country';

class CountriesRepository implements ICountriesRepository {
  private ormRepository: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(Country);
  }

  public async findAll(): Promise<Country[]> {
    const countries = this.ormRepository.find();

    return countries;
  }

  public async findById(id: string): Promise<Country | undefined> {
    const country = await this.ormRepository.findOne(id);

    return country;
  }
}

export default CountriesRepository;
