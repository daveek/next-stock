import { Component, OnInit } from '@angular/core';
import  productsJson from '../../assets/data/products.json';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productsList: Array<Product> = new Array<Product>();
  constructor() {
    // Intended
   }

  ngOnInit(): void {
    this.productsList = [];
    let productIter: any;

    productsJson.forEach((element, iter: number) => {
      productIter = element;
      this.productsList[iter] = productIter;
    });

    /*** Method to order the products by Sales Ranking ***/
    this.orderProductsBySalesRanking();
  }

  public orderProductsBySalesRanking(): void {

    this.productsList.sort((a, b) => a?.sales_ranking - b?.sales_ranking )

  }

  public processProduct(code: number): void {
    this.productsList = this.productsList.filter( item => item.code !== code);
  }

}
