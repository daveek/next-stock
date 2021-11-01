import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../shared/models/product';
import { MatDialogModule } from '@angular/material/dialog';
import { MainComponent } from './main.component';

const PRODUCT_MOCK_1: Product = {
  code: 123,
  name: 'ACME 1',
  price: 1.99,
  sales_ranking: 8,
  stockout_rate: 0.110,
  wh_coverage: 0.85,
  size_stock: new Map ([
    ['S', 1],
    ['M', 2],
    ['L', 0],
    ['XL', 4],
    ['XXL', 0]
  ])
};

const PRODUCT_MOCK_2: Product = {
  code: 321,
  name: 'ACME 2',
  price: 0.99,
  sales_ranking: 5,
  stockout_rate: 0.90,
  wh_coverage: 0.41,
  size_stock: new Map([
    ['S', 0],
    ['M', 0],
    ['L', 0],
    ['XL', 2],
    ['XXL', 1]
  ])
};


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort the products by sales ranking', () => {
    component.productsList = [];
    component.productsList[0] = PRODUCT_MOCK_1;
    component.productsList[1] = PRODUCT_MOCK_2;

    component.orderProductsBySalesRanking();

    expect(component.productsList[0]).toEqual(PRODUCT_MOCK_2);

  });

});
