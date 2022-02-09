import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { SignupComponent } from './right-section/signup/signup.component';
import { LoginComponent } from './right-section/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ForgotPasswordComponent } from './right-section/forgot-password/forgot-password.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import {NgxOtpInputModule} from "ngx-otp-input";


@NgModule({
  imports: [
    AccountRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxOtpInputModule,
  ],
  declarations: [


    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LeftSectionComponent,
    RightSectionComponent
  ],
  exports: [
    LeftSectionComponent
  ],
  providers: []
})
export class AccountModule {

}
