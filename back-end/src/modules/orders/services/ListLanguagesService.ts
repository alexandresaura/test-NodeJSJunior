import { inject, injectable } from 'tsyringe';

import Language from '../infra/typeorm/entities/Language';
import ILanguagesRepository from '../repositories/ILanguagesRepository';

@injectable()
class ListLanguagesService {
  private languagesRepository: ILanguagesRepository;

  constructor(
    @inject('LanguagesRepository') languagesRepository: ILanguagesRepository,
  ) {
    this.languagesRepository = languagesRepository;
  }

  public async execute(): Promise<Language[]> {
    const languages = await this.languagesRepository.findAll();

    return languages;
  }
}

export default ListLanguagesService;
