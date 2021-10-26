import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/shared/models/product';

import { ProductComponent } from './product.component';

const PRODUCT_MOCK_1: Product = {
  code: 123,
  name: 'ACME 1',
  price: 1.99,
  sales_ranking: 8,
  stockout_rate: 0.110,
  wh_coverage: 0.85,
  size_stock: new Map([
    ['S', 1],
    ['M', 2],
    ['L', 0],
    ['XL', 4],
    ['XXL', 0]
  ])
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should whCover be:  Excellent', () => {
    component.productData = PRODUCT_MOCK_1;
    component.productData.wh_coverage = 0.95;
    let stringEval = component.evalWhCover(component.productData.wh_coverage);

    expect(stringEval).toEqual('Excellent');
  });

  it('should whCover be: Very Low', () => {
    component.productData = PRODUCT_MOCK_1;
    component.productData.wh_coverage = 0.15;
    let stringEval = component.evalWhCover(component.productData.wh_coverage);

    expect(stringEval).toEqual('Very Low');
  });
});
