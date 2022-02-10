import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { BaseResponse, LoginUserDetail, OTPResponse, UserInfoModel } from 'src/app/models/base-response';
import { UserUtilsService } from 'src/app/services/common/user-utils.service';
import { LoginService } from 'src/app/services/login-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-opt-validation',
  templateUrl: './opt-validation.component.html',
  styles: [
  ]
})
export class OptValidationComponent implements OnInit {

  otp: string = "";
  xAuth: string = "";
  loading: boolean = false;
  isAuth = true;
  btnSndOTP: any = "Wait...";
  timeLeft = 10;
  interval: any;
  btnTime: any;

  //interval;

  constructor(private toastr: ToastrService,
  private loginService:LoginService,
  private router: Router,
  private route: ActivatedRoute,
  private spinner: NgxSpinnerService)
{
  setTimeout(
() => {
  this.isAuth = false;
  this.btnSndOTP = "Resent OTP";
}, 10000);
}


ngOnInit(): void {

  debugger;
  if (this.isAuth == false )
{
  this.btnSndOTP = "Resent OTP";
}
else
{
  this.startTimer()
  this.btnSndOTP = ""
}

}

//Added Timmer on login screen
startTimer() {
  debugger;

  this.interval = setInterval(() => {

    if (this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.pauseTimer()
      this.btnEnable()
      //this.timeLeft = 10;
    }
  }, 1000)
}

pauseTimer() {
  clearInterval(this.interval);
}

btnEnable()
{
  if (this.timeLeft == 0)
  {
    this.isAuth = false;
  }
  else
    this.isAuth = true;
}

sendOTP(){
  debugger;
  if(this.otp==""|| this.otp==" " || this.otp==undefined || this.otp==null){
    this.toastr.warning("Please enter OTP");
  }
  else{
    var userUtilService = new UserUtilsService();
    debugger;
    userUtilService.setOTP(this.otp);

    this.spinner.show();
    this.loginService.sendOTP()
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe((baseResponse:OTPResponse) => {

        console.log(baseResponse);
        if(baseResponse.Response.ResCode==100){
          this.toastr.success(baseResponse.Response.ResDesc, "OTP Validated");
          var user=new LoginUserDetail();
          user.access_token=baseResponse.access_token;
          user.expires=baseResponse.expires;
          user.issued=baseResponse.issued;
          user.session_id=baseResponse.session_id;
          userUtilService.setUserDetails(user);
          userUtilService.setUserInfo(baseResponse.RetailerInfo)
          this.router.navigateByUrl('mpin-management/dashboard');
        }
        else{
          this.toastr.error(baseResponse.Response.ResDesc, "OTP Not Validated")
        }
      });
  }
  console.log(this.otp);
}

generateOTP() {
  debugger
  // this.isAuth = false;

  if (this.isAuth == true) {
    this.btnSndOTP = "Resent OTP";
  }
  else {
    this.startTimer()
    this.timeLeft = 10;
    this.btnSndOTP = "Resent OTP"
    this.isAuth = true;
  }
  this.spinner.show();
  debugger
  this.loginService.generateOTP()
    .pipe(
      finalize(() => {
        this.loading = false;
        this.spinner.hide();
      })
    )
    .subscribe((baseResponse: BaseResponse) => {

      console.log(baseResponse);
      if (baseResponse.ResCode == 100) {
        this.toastr.success(baseResponse.ResDesc, "OTP Sent");
        this.router.navigate(['/signin/otp-validation'])

      }
      else {
        this.toastr.error(baseResponse.ResDesc, "OTP Not Sent")
      }
    });
}
}
