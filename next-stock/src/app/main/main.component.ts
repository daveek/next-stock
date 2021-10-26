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
  }
}
