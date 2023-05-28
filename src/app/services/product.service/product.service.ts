import { IProduct } from './../../interfaces/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ProductServiceComponent {
  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:3000/products`, product)
  }
}
