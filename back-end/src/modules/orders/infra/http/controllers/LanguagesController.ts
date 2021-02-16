import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListLanguagesService from '@modules/orders/services/ListLanguagesService';

class LanguagesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLanguages = container.resolve(ListLanguagesService);

    const languages = await listLanguages.execute();

    return response.json(languages);
  }
}

export default LanguagesController;
