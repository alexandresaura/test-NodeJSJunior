import Country from '../infra/typeorm/entities/Country';

export default interface ICountriesRepository {
  findAll(): Promise<Country[]>;
  findById(id: string): Promise<Country | undefined>;
}
