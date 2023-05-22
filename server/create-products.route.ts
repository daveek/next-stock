import { Request, Response } from 'express';
import { PRODUCTS } from './db-data';

export var productsKeyCounter = 100;

export function createProduct(req: Request, res: Response) {
  console.log('Creating new product ...');

  const changes = req.body;

  const newProduct = {
    id: productsKeyCounter,
    seqNo: productsKeyCounter,
    ...changes,
  };

  PRODUCTS[newProduct.id] = newProduct;

  productsKeyCounter += 1;

  setTimeout(() => {
    res.status(200).json(newProduct);
  }, 2000);
}
