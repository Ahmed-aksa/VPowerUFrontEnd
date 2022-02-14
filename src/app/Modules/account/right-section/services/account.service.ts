import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Router } from '@angular/router';
import {environment} from "../../../../../environments/environment";

import { SignupComponent } from '../signup/signup.component';
import { Observable } from 'rxjs';

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
  register(user: any) : Observable<any> {
    return this.http.post<any>(environment.USER_API_URL + "RegisterUser", user);
  }
  isLoggedIn(){
    return  localStorage.getItem('token');
  }

  //
  // loggedIn() {
  //   return !!localStorage.getItem('token');
  // }

  // loggedOut() {
  //   localStorage.removeItem('token');
  //   return this._router.navigate(['/login']);
  //}
  
  
  sendOTP(otp: any) {
    return this.http.put<any>(environment.USER_API_URL +'VerifyOTPAsync' , otp);
  }
  resendEmail(email: any) {
    return this.http.post<any>(environment.USER_API_URL + 'ResendEmail' , {"email": email});
  }
  forgot_password(email: any) {
    return this.http.post<any>(environment.USER_API_URL + 'ForgotPassword', {"email": email});
  }
  //
  // logOut() {
  //   localStorage.removeItem('token');
  // }
  //
  // getToken() {
  //   return localStorage.getItem('token');
  // }
}
