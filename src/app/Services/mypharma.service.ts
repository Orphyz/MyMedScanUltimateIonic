import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isThisMinute } from 'date-fns';
import { Subject, Observable } from 'rxjs';
import { Mpform } from '../Models/mpform';
import { MyPharma } from '../Models/my-pharma';

@Injectable({
  providedIn: 'root'
})
export class MypharmaService {
  myPharmaList: MyPharma[] = [];
  listSub: Subject<MyPharma[]> = new Subject<MyPharma[]>();
  private baseAdress= 'https://localhost:7257/api/';
  private _isConnected: boolean;

  constructor(
    private client: HttpClient
  ) { }

  emitListSub() {
    this.listSub.next(this.myPharmaList);
  }
  getAll(){
    const id = Number.parseInt(localStorage.getItem('uid'));
    this.client.get<MyPharma[]>(this.baseAdress+'MP/GetAll/'+id).subscribe({
      next: (data: MyPharma[]) => {
        this.myPharmaList = data;
        console.log(this.myPharmaList);
        this.emitListSub();
    }});
  }
  getById(id: number): Observable<MyPharma>{
    return this.client.get<MyPharma>(this.baseAdress+'MP/GetById/'+id);
  }
  create(newMPForm: Mpform){
    newMPForm.userId = Number.parseInt(localStorage.getItem('uid'));
    console.log(newMPForm);
    return this.client.post<MyPharma>(this.baseAdress+'MP/Create',newMPForm);
  }
  delete(id: number){
    return this.client.delete(this.baseAdress+'MP/Delete/'+id);
  }
}
