import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomProduct } from '../Models/custom-product';

@Injectable({
  providedIn: 'root'
})
export class CustomProductService {
  private baseAdress= 'https://localhost:7257/api/';
  private _isConnected: boolean;

  constructor(
    private client: HttpClient,
    private router: Router
  ) { }
  create(createCPForm: CustomProduct){
    createCPForm.userId= Number.parseInt(localStorage.getItem('uid'));
    return this.client.post(this.baseAdress+'CP/Create',createCPForm);
  }
}
