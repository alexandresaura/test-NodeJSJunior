import { getRepository, Repository } from 'typeorm';

import ILanguagesRepository from '@modules/orders/repositories/ILanguagesRepository';

import Language from '../entities/Language';

class LanguagesRepository implements ILanguagesRepository {
  private ormRepository: Repository<Language>;

  constructor() {
    this.ormRepository = getRepository(Language);
  }

  public async findAll(): Promise<Language[]> {
    const languages = this.ormRepository.find();

    return languages;
  }

  public async findById(id: string): Promise<Language | undefined> {
    const language = await this.ormRepository.findOne(id);

    return language;
  }
}

export default LanguagesRepository;
