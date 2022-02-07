import {Component, OnInit} from '@angular/core';
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
  passwordMatch=false;
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
        mpan: new FormControl('',),
        pdik: new FormControl('',),
        mdik: new FormControl('',),
        adik: new FormControl('',),
        uflex: new FormControl('',),
        dflex: new FormControl('',),
        ftype: new FormControl('',),
      }
      ,
      {
        validators: this.MustMatch('password','cpassword')
      });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submited = true;
    console.log(this.signupForm.value);
}

 MustMatch(password: string, cPassword: string) {
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[cPassword];
      if (matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }
      if (control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch: true})
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

}
