import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCountriesService from '@modules/orders/services/ListCountriesService';

class CountriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCountries = container.resolve(ListCountriesService);

    const languages = await listCountries.execute();

    return response.json(languages);
  }
}

export default CountriesController;
