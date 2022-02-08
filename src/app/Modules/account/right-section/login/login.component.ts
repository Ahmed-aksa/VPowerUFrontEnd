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
  toaster: any;

  constructor(
    private account_service: AccountService,
    private _formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      UserName: new FormControl('',[Validators.required, Validators.email]),
      Password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    });

  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  
  loginUser() {
    this.account_service.login(this.loginForm.value).subscribe((data) => {
    
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.router.navigate(['dashboard']);
      localStorage.setItem('token', data.token); 
    });
    if (this.loginForm.valid){
      this.account_service.login(this.loginForm.value).subscribe((result)=>{
        console.log(result)
       })
    }
  }
}
