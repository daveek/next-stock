export class Product {
  code!: number;
  name!: string;
  price!: number;
  sales_ranking!: number;
  stockout_rate!: number;
  wh_coverage!: number;
  size_stock!: Map<string, number>;
}

export enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL'
}
