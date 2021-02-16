import FakeCountriesRepository from '@modules/orders/repositories/fakes/FakeCountriesRepository';
import ListCountriesService from '@modules/orders/services/ListCountriesService';

let fakeCountriesRepository: FakeCountriesRepository;
let listCountries: ListCountriesService;

describe('ListCountries', () => {
  beforeEach(() => {
    fakeCountriesRepository = new FakeCountriesRepository();
    listCountries = new ListCountriesService(fakeCountriesRepository);
  });

  it('should be able to list all countries', async () => {
    const countries = await listCountries.execute();

    const country1 = await fakeCountriesRepository.findById('1');
    const country2 = await fakeCountriesRepository.findById('2');
    const country3 = await fakeCountriesRepository.findById('3');

    expect(countries).toEqual([country1, country2, country3]);
  });
});
