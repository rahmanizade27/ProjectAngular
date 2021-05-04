import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  authenticated(){
    this.isAuthenticated = !this.isAuthenticated;
  }

  registerUser(email: string, password: string){
    return this.http
    .post('http://tavana-node.herokuapp.com/auth/signup',{userName: email, password:password});
  }

  loginUser(email: string, password: string){
    return this.http
    .post('http://tavana-node.herokuapp.com/auth/login',{userName: email, password:password});
 
  }



}
