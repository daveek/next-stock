import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import  productsJson from '../../assets/data/products.json';
import { Product } from '../shared/models/product';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productsList: Array<Product> = new Array<Product>();
  constructor(
    private readonly dialog: MatDialog,) {
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

  comfirmProduct(code: number): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '15%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'accept') {
        console.log(`Confirmed Logout`);
        this.processProduct(code);
      }
    });
  }

}
