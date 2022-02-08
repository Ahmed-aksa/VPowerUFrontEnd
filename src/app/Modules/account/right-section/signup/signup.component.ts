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
      Name:['', [Validators.required, ]],
      Email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required,]),
      Password: new FormControl('', [Validators.required,]),
        cpassword: new FormControl('', [Validators.required,]),
        address: new FormControl('', [Validators.required]),
        mpan: new FormControl('',),
        PeakDemand: new FormControl('',),
        MinimumDemand: new FormControl('',),
        AnnualDemand: new FormControl('',),
        UpwardFlexiblity: new FormControl('',),
        DownwardFlexiblity: new FormControl('',),
        FlexiblityType: new FormControl('',),
      }
      ,
      {
        validators: this.MustMatch('Password','cpassword')
      });
  }

  get f() { return this.signupForm.controls; }

  Next(){
    this.submited = true;
  }
  onSubmit() {
    this.submited = true;
    if(this.signupForm.valid){

      this.account_service.register(this.signupForm.value).subscribe((result)=>{
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.token);
        this.router.navigate(['']);
       console.log(result)
      })
    }
}

 MustMatch(Password: string, cPassword: string) {
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[Password];
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
