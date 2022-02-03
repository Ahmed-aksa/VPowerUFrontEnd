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
  submited=false;
  IsFirstStep=true;
  constructor(
    private account_service: AccountService,
    private _formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      name:['', [Validators.required, ]],
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),
      cpassword: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required]),
      mpan: new FormControl('', ),
      pdik: new FormControl('', ),
      mdik: new FormControl('', ),
      adik: new FormControl('', ),
      uflex: new FormControl('', ),
      dflex: new FormControl('', ),
      ftype: new FormControl('', ),
    });
  }

  get f() { return this.signupForm.controls; }


  submitForm() {
    debugger
    this.submited=true;
    if (this.signupForm.invalid){
      return  
    }
    console.log(this.signupForm.value)
  }
  onSubmit() {
    debugger;
    this.submited = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
}

}
