import { Request, Response } from 'express';
import { PRODUCTS } from './db-data';

export function saveProduct(req: Request, res: Response) {
  console.log('Saving product ...');

  const id = req.params['id'],
    changes = req.body;

  PRODUCTS[id] = {
    ...PRODUCTS[id],
    ...changes,
  };

  setTimeout(() => {
    res.status(200).json(PRODUCTS[id]);
  }, 2000);
}
