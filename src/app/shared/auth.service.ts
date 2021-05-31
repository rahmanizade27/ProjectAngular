import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponsiveData{
  userName: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  authenticated(){
    this.isAuthenticated = !this.isAuthenticated;
  }

  registerUser(username: string, password: string){
    return this.http
    .post<AuthResponsiveData>('http://tavana-node.herokuapp.com/auth/signup',{userName: username, password:password});
  }

  loginUser(username: string, password: string){
    return this.http
    .post('http://tavana-node.herokuapp.com/auth/login',{userName: username, password:password});
  }
  requestGoods(){
    return this.http.post('https://http://tavana-node.herokuapp.com/goods',{})
  }



}
