import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData: Product | null | undefined;
  constructor() {
    // Intentded
   }

  ngOnInit(): void {
    // Intented
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

}
