import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  NgZone,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import productsJson from '../../assets/data/products.json';
import { Product } from '../shared/models/product';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { bounceInOnEnterAnimation } from 'angular-animations';
import { SchedulerLike, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  CdkVirtualScrollViewport,
  ScrollDispatcher,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [bounceInOnEnterAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  productsList: Array<Product> = new Array<Product>();

  @ViewChild(CdkVirtualScrollViewport)
  virtualScroll!: CdkVirtualScrollViewport;

  searchPageNumber: number;
  pagesize = 4;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
    private readonly dialog: MatDialog
  ) {
    this.searchPageNumber = 0;
  }

  ngOnInit(): void {
    this.productsList = [];
    let productIter: any;

    productsJson.forEach((element, iter: number) => {
      productIter = element;
      this.productsList[iter] = productIter;
    });

    /***
     * Method to order the products by Sales Ranking
     **/

    this.orderProductsBySalesRanking();
    this.nextSearchPage(this.searchPageNumber);
  }

  ngAfterViewInit(): void {
    this.scrollDispatcher
      .scrolled()
      .pipe(
        filter(
          (event) =>
            this.virtualScroll.getRenderedRange().end ===
            this.virtualScroll.getDataLength()
        )
      )
      .subscribe((event) => {
        this.searchPageNumber++;
        this.nextSearchPage(this.searchPageNumber);
      });
  }

  getResults(pageNumber: any) {
    let result: Array<Product> = new Array<Product>();
    let productIter: any;

    productsJson.forEach((element, iter: number) => {
      productIter = element;
      result[iter] = productIter;
    });
    return of(result);

    // return of(products);
  }

  nextSearchPage(pageNumber: number): void {
    this.getResults(pageNumber).subscribe((pagedResults) => {
      this.zone.run(() => {
        setTimeout(() => {
          console.log('pagedResults :', pagedResults);
          pagedResults.forEach((ele) => {
            this.productsList.push(ele);
          });
        }, 200); // mimic API time delay
      });
    });
  }

  public orderProductsBySalesRanking(): void {
    this.productsList.sort((a, b) => a?.sales_ranking - b?.sales_ranking);
  }

  public processProduct(code: number): void {
    this.productsList = this.productsList.filter((item) => item.code !== code);
  }

  comfirmProduct(code: number): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: 'auto',
      data: code,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        console.log(`Product Marked as Completed`);
        this.processProduct(code);
      }
    });
  }
}
