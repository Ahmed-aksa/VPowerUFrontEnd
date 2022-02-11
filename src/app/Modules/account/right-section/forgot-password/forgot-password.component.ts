import { Component, OnInit } from '@angular/core';
import {AccountService} from "../services/account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

 email:any
  forgotPasswordForm!: FormGroup
  constructor(private account_service: AccountService,
              private _formBuilder: FormBuilder,
              private router: Router,
              private spinner: NgxSpinnerService,) { }



  ngOnInit(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required,]],
    });
  }

  submit() {
    this.spinner.show();
    this.email = this.forgotPasswordForm.value.email.toString();
    debugger
    this.account_service.forgot_password(this.email).pipe(finalize(() => {
      this.spinner.hide()

    })).subscribe((result) => {
     console.log(result);
    });
  }
}
