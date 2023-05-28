import { IProduct } from './../../interfaces/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ProductServiceComponent {
  constructor(private http: HttpClient) { }

}
