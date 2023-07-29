import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  constructor(private service: ProductService) {

  }
  ngOnInit(): void {
    this.getProducts();
  }
  products: any[] = [];
  getProducts() {
    this.service.getAllProducts().subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
