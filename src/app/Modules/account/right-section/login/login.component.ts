import {Component, OnInit} from '@angular/core';
import {AccountService} from "../services/account.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private account_service: AccountService,
    private _formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(25)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  loginUser() {
    // this.account_service.login(this.loginForm.value).subscribe((data) => {
    //
    //   localStorage.setItem('token', data.token);
    //   localStorage.setItem('user', JSON.stringify(data.user));
    //   this.toaster.success(data.message);
    //   this.router.navigate(['dashboard']);
    //   localStorage.setItem('token', data.token);
    // }, (error: { error: { message: any; }; }) => {
    //   if (error.error.message) {
    //     this.toaster.error(error.error.message);
    //   } else {
    //     this.toaster.error("Something wrong happened, please try again")
    //   }
    //
    //
    //
    // });
  }


}
