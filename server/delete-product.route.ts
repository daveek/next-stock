import { Request, Response } from 'express';
import { PRODUCTS } from './db-data';

export function deleteProduct(req: Request, res: Response) {
  console.log('Deleting product ...');

  const id = req.params['id'];

  const product = PRODUCTS[id];

  delete PRODUCTS[id];

  setTimeout(() => {
    res.status(200).json({ id });
  }, 2000);
}
