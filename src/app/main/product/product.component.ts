import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData: Product | null | undefined;

  stockRatePercent: number = 0;

  constructor() {
    // Intentded
  }

  ngOnInit(): void {
    // Intended
  }

  public evalWhCover(cover: any): string {
    if (cover <= 0.5) {
      return 'Very Low';
    } else if (cover <= 0.75 && cover > 0.5) {
      return 'Good';
    } else if (cover > 0.75) {
      return 'Excellent';
    }

    return 'No data';
  }

  public isGood(): boolean {
    if (this.productData) {
      return this.productData?.wh_coverage > 0.5;
    } else {
      return false;
    }
  }

  public isNotGood(): boolean {
    if (this.productData) {
      return this.productData?.wh_coverage <= 0.5;
    } else {
      return false;
    }
  }

  convertPercent(): number {
    if (this.productData) {
      return this.productData?.stockout_rate * 100;
    } else {
      return 0;
    }
  }
}
