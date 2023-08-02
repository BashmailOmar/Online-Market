import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productData: any;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;


  add() {
    this.item.emit({ item: this.productData, quantanty: this.amount });
    this.addButton = false;
  }

}
