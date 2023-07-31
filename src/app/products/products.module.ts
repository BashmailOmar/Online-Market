import { NgModule } from '@angular/core';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsCardComponent } from './components/products-card/products-card.component';




@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ProductsCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ]
})
export class ProductsModule { }
