import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  constructor(private service: ProductService) { }
  products: any[] = [];
  getProducts() {
    // this.service.getAllProducts().subscribe((res: any) => {
    //   console.log()
    // });
  }
}
