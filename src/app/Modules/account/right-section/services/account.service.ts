import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

// constructor(private http: HttpClient){}
  //
  constructor(private http: HttpClient , private _router: Router) {
  }
  //
  login(user: any) {
    return this.http.post<any>(environment.USER_API_URL + 'LoginUser', user);
  }
  //
  //
  register(user: any) {
    return this.http.post<any>(environment.USER_API_URL + "RegisterUser", user);
  }
  //
  // loggedIn() {
  //   return !!localStorage.getItem('token');
  // }
  // loggedOut() {
  //   localStorage.removeItem('token');
  //   return this._router.navigate(['/login']);
  //
  // }
  //
  // sendOTP(otp_data: any) {
  //   return this.http.post<any>(environment.USER_API_URL + 'user/auth/send-otp', otp_data);
  // }
  //
  // logOut() {
  //   localStorage.removeItem('token');
  // }
  //
  // getToken() {
  //   return localStorage.getItem('token');
  // }
}
