import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(
    private account_service: AccountService,
    private _formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required]),

    });
  }

  submitForm() {
    if (this.signupForm.valid)
    console.log(this.signupForm.value)
  }
}
