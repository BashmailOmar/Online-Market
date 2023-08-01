import { NgModule } from '@angular/core';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';




@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ProductComponent],

  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
