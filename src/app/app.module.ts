import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/materials/materials.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';
import { ConfirmationComponent } from './main/confirmation/confirmation.component';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    ConfirmationComponent,
  ],
  imports: [
    MaterialsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollingModule,
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent],
})
export class AppModule {}
