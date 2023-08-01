import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() price: string = "";

  constructor() {

  }
}
