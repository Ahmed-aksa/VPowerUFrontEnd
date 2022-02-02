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
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      mpan: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      pdik: new FormControl('', [Validators.required]),
      mdik: new FormControl('', [Validators.required]),
      adik: new FormControl('', [Validators.required]),
      uflex: new FormControl('', [Validators.required]),
      dflex: new FormControl('', [Validators.required]),
      ftype: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    console.log(this.signupForm.value)
  }
}
