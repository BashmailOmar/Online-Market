import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productData: any;
  @Output() item = new EventEmitter();


  add() {
    this.item.emit(this.productData);
  }

}
