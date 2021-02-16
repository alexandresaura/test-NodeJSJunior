import Language from '../infra/typeorm/entities/Language';

export default interface ILanguagesRepository {
  findAll(): Promise<Language[]>;
  findById(id: string): Promise<Language | undefined>;
}
