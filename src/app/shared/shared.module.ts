import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './component/select/select.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './component/spinner/spinner.component';



@NgModule({
  declarations: [
    SelectComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ]
})
export class SharedModule { }
