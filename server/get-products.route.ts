import { Request, Response } from 'express';
import { PRODUCTS } from './db-data';

export function getAllProducts(req: Request, res: Response) {
  console.log('Retrieving products data ...');

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(PRODUCTS) });
  }, 1000);
}

export function getProductByUrl(req: Request, res: Response) {
  const productUrl = req.params['productUrl'];

  const products: any = Object.values(PRODUCTS);

  const product = products.find((product) => product.url == productUrl);

  setTimeout(() => {
    res.status(200).json(product);
  }, 1000);
}
