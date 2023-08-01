import { NgModule } from '@angular/core';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';
import { AllProductsComponent } from './components/all-products/all-products.component';




@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ProductComponent,
    AllProductsComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  exports: [

  ]
})
export class ProductsModule { }
