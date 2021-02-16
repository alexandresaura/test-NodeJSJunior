import Language from '@modules/orders/infra/typeorm/entities/Language';

import ILanguagesRepository from '../ILanguagesRepository';

class FakeLanguagesRepository implements ILanguagesRepository {
  private languages: Language[] = [];

  constructor() {
    const language1 = new Language();
    Object.assign(language1, {
      id: '1',
      name: 'language1',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    const language2 = new Language();
    Object.assign(language2, {
      id: '2',
      name: 'language2',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    const language3 = new Language();
    Object.assign(language3, {
      id: '3',
      name: 'language3',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    this.languages.push(...[language1, language2, language3]);
  }

  public async findAll(): Promise<Language[]> {
    return [...this.languages];
  }

  public async findById(id: string): Promise<Language | undefined> {
    const language = this.languages.find(c => c.id === id);

    return language;
  }
}

export default FakeLanguagesRepository;
