import FakeLanguagesRepository from '@modules/orders/repositories/fakes/FakeLanguagesRepository';
import ListLanguagesService from '@modules/orders/services/ListLanguagesService';

let fakeLanguagesRepository: FakeLanguagesRepository;
let listLanguages: ListLanguagesService;

describe('ListLanguages', () => {
  beforeEach(() => {
    fakeLanguagesRepository = new FakeLanguagesRepository();
    listLanguages = new ListLanguagesService(fakeLanguagesRepository);
  });

  it('should be able to list all languages', async () => {
    const languages = await listLanguages.execute();

    const language1 = await fakeLanguagesRepository.findById('1');
    const language2 = await fakeLanguagesRepository.findById('2');
    const language3 = await fakeLanguagesRepository.findById('3');

    expect(languages).toEqual([language1, language2, language3]);
  });
});
