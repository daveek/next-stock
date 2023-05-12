import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Product, Size } from 'src/app/shared/models/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product.component';

const PRODUCT_MOCK_1: Product = {
  code: 123,
  name: 'ACME 1',
  price: 1.99,
  sales_ranking: 8,
  stockout_rate: 0.17,
  wh_coverage: 0.85,
  size_stock: new Map([
    ['S', 1],
    ['M', 2],
    ['L', 0],
    ['XL', 4],
    ['XXL', 0],
  ]),
};

describe('ProductComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent, TestHostComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.productData = PRODUCT_MOCK_1;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should whCover be:  Excellent', () => {
    component.productData = PRODUCT_MOCK_1;
    console.warn(`Wh_CO: ${component.productData.wh_coverage}`);
    component.productData.wh_coverage = 0.99;
    let stringEval = component.evalWhCover(component.productData.wh_coverage);

    expect(stringEval).toEqual('Excellent');
  });

  it('should whCover be: Very Low', () => {
    component.productData = PRODUCT_MOCK_1;
    console.warn(`Wh_CO: ${component.productData.wh_coverage}`);
    component.productData.wh_coverage = 0.0;
    let stringEval = component.evalWhCover(component.productData.wh_coverage);

    expect(stringEval).toEqual('Very Low');
  });

  it('should return true when WhCoverage good', () => {
    spyOn(component, 'isGood').and.callThrough();
    component.productData = PRODUCT_MOCK_1;
    console.warn(`Wh_CO: ${component.productData.wh_coverage}`);
    component.productData.wh_coverage = 0.51;

    expect(component.isGood()).toBeTruthy();
  });

  it('should return true when WhCoverage is Not good', () => {
    spyOn(component, 'isNotGood').and.callThrough();
    component.productData = PRODUCT_MOCK_1;
    console.warn(`Wh_CO: ${component.productData.wh_coverage}`);
    component.productData.wh_coverage = 0.5;

    expect(component.isNotGood()).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `<app-product [productData]="PRODUCT_MOCK_1"></app-product>`,
  })
  class TestHostComponent {}
});
