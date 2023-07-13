import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SelectComponent } from './component/select/select.component';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SelectComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
