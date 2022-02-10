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
      'height': '50px'
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
    // let timerOn = true;
    //
    // const timer = (remaining: any) => {
    //   let m: string | number = Math.floor(remaining / 60);
    //   let s: string | number = remaining % 60;
    //
    //   m = m < 10 ? '0' + m : m;
    //   s = s < 10 ? '0' + s : s;
    //
    //   // (<HTMLInputElement>document.getElementById("timer")).value = m + ':' + s;
    //   this.time.nativeElement.value = m + ':' + s;
    //     remaining -= 1;
    //   console.log(this.time.nativeElement.value);
    //
    //   if (remaining >= 0 && timerOn) {
    //     setTimeout(function () {
    //       timer(remaining);
    //     }, 1000);
    //     return;
    //   }
    //
    //   if (!timerOn) {
    //     // Do validate stuff here
    //     return;
    //   }
    //
    //   // Do timeout stuff here
    //   alert('Timeout for otp');
    //
    // }
    // timer(60);
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
      } else alert("Incorrect OTP");
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
}
