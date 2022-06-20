import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConnectedUser } from '../Models/connected-user';
import {HttpClient} from '@angular/common/http';
import { MypharmaService } from './mypharma.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedSubject= new BehaviorSubject<boolean>(this.isConnected);
  private baseAdress= 'https://localhost:7257/api/';

  private _isConnected: boolean;

  constructor(
    private client: HttpClient,
    private mpService: MypharmaService
  ) { }

  get isConnected(): boolean {
    return localStorage.getItem('token') != null ? true : false;
  }

  emitSubject() {
    this.connectedSubject.next(this.isConnected);
  }

  login(email: string, password: string) {
    this.client.post<ConnectedUser>(this.baseAdress+'auth/login', {email, password}).subscribe({
      next : (data: ConnectedUser) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('uid', data.id.toString());
        this.emitSubject();
        this.mpService.getAll();
      }
    });
  }

  logout() {
    localStorage.clear();
    this.emitSubject();
  }
}
