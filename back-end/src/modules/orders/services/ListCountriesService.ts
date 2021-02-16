import { inject, injectable } from 'tsyringe';

import Country from '../infra/typeorm/entities/Country';
import ICountriesRepository from '../repositories/ICountriesRepository';

@injectable()
class ListCountriesService {
  private countriesRepository: ICountriesRepository;

  constructor(
    @inject('CountriesRepository') countriesRepository: ICountriesRepository,
  ) {
    this.countriesRepository = countriesRepository;
  }

  public async execute(): Promise<Country[]> {
    const countries = await this.countriesRepository.findAll();

    return countries;
  }
}

export default ListCountriesService;
