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
    this.getCategories();
  }
  products: any[] = [];
  categories: any[] = [];
  cartProduct: any[] = [];
  loader: boolean = false;

  getProducts() {
    this.loader = true;
    this.service.getAllProducts().subscribe((response: any) => {
      this.loader = false;
      this.products = response;
    });
  }
  getCategories() {
    this.loader = true;
    this.service.getAllCategories().subscribe((response: any) => {
      this.loader = false;
      this.categories = response;
    });

  }
  filterCaregory(event: any) {
    let value = event.target.value;
    (value != "all") ? this.getProductByCategory(value) : this.getProducts();
  }

  getProductByCategory(keyword: string) {
    this.loader = true;
    this.service.getProductByCategory(keyword).subscribe((response: any) => {
      this.loader = false;
      this.products = response;
    });
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProduct.find(item => item.id == event.id);
      if (exist) {
        alert("Bro!, you just fucked up");
      } else {
        this.cartProduct.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProduct));
      }
    } else {
      this.cartProduct.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProduct));
    }
  }
}
