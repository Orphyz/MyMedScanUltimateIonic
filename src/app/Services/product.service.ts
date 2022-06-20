import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // connectedSubject= new BehaviorSubject<boolean>(this.isConnected);
  private baseAdress= 'https://localhost:7257/api/';

  private _isConnected: boolean;

  constructor(
    private client: HttpClient,
    private router: Router
  ) { }
  getAll(): Observable<Product[]>{
    return this.client.get<Product[]>(this.baseAdress+'Product/GetAll');
  }
  getByName(prodName: string): Observable<Product[]>{
    return this.client.get<Product[]>(this.baseAdress+'Product/GetByName?prodName/'+prodName);
  }
  getByCnk(cnk: string): Observable<Product>{
    return this.client.get<Product>(this.baseAdress+'Product/GetByCnk/'+cnk);
  }
  getByGtin(gtin: number): Observable<Product>{
    return this.client.get<Product>(this.baseAdress+'Product/GetByGtin/'+gtin);
  }
  getById(id: number): Observable<Product>{
    return this.client.get<Product>(this.baseAdress+'Product/GetById/'+id);
  }

  // get isConnected(): boolean {
  //   return localStorage.getItem('token') != null ? true : false;
  // }

  // emitSubject() {
  //   this.connectedSubject.next(this.isConnected);
  // }
}
