import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(environment.baseUrl + 'products')
  }

  getAllCategories() {
    return this.http.get(environment.baseUrl + 'products/categories')
  }

  getProductByCategory(keyword: string) {
    return this.http.get(environment.baseUrl + 'products/category/' + keyword)
  }
  getProductById(id: any) {
    return this.http.get(environment.baseUrl + 'products/' + id)
  }
}
