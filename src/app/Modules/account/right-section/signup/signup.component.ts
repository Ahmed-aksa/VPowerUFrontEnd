import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from 'ngx-spinner';
import {finalize} from "rxjs/operators";
import {templateJitUrl} from "@angular/compiler";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('ngOtpInput', {static: false}) ngOtpInput: any;
  @ViewChild('time', {static: false}) time: any
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: true,
    disableAutoFocus: true,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'margin': '7px'
    }
  };
  signupForm!: FormGroup
  submited = false;
  passwordMatch = false;
  popup = false;
  otp: any;
  isStep = 1;
  showOtpComponent = true;
  otpVerfied = false;
  private userId: any;
  private interval: any;
  public timeLeft = 60;
  email: any
  resendBtn = false;


  constructor(
    private account_service: AccountService,
    private _formBuilder: FormBuilder,
    private router: Router, private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
        Name: ['', [Validators.required,]],
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
        validators: this.MustMatch('Password', 'cpassword')
      });
  }


  get f() { return this.signupForm.controls; }


  onSubmit() {
    this.submited = true;
    if (this.signupForm.valid) {
      if (this.isStep == 2) {
        this.spinner.show();
        this.account_service.register(this.signupForm.value).pipe(finalize(() => {
          this.spinner.hide()

        })).subscribe((result) => {
          this.popup = true;
          this.startTimer();
          this.userId = result.userId;
          this.email = result.email;
          this.resendBtn = false
        });
      }

      else {
        this.isStep = 2
      }
    }
  }


  MustMatch(Password: string, cPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[Password];
      const matchingControl = formGroup.controls[cPassword];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch: true})
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onOtpChange(otp: any) {
    this.otp = otp;

  }

  startTimer() {
    debugger
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer()
        this.btnEnable();
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  submitOTP() {
    this.spinner.show();
    this.account_service.sendOTP({"otp": this.otp, "userId": this.userId}).pipe(finalize(() => {
      this.spinner.hide()
    })).subscribe((result) => {
      if (result.isSuccess) {
        this.otpVerfied = true;
        this.popup = false;
        this.router.navigate(['login']);
      }
    })
  }

  btnEnable()
  {
    if (this.timeLeft === 0)
    {
      this.resendBtn = true
      console.log("im here in true")
    }
    else
      this.resendBtn = false;
    console.log("im here in false")
  }

  onResendEmail() {
    this.spinner.show();
    this.account_service.resendEmail(this.email).pipe(finalize(() => {
      this.spinner.hide()

    })).subscribe((result) => {
      this.popup = true;
      this.startTimer();
      this.userId = result.userId;
      this.resendBtn = false
    });
  }
}
