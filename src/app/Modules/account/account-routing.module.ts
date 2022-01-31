import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AccountComponent} from "./account.component";
import {LoginComponent} from "./right-section/login/login.component";
import {SignupComponent} from "./right-section/signup/signup.component";
import {ForgotPasswordComponent} from "./right-section/forgot-password/forgot-password.component";
import {RightSectionComponent} from "./right-section/right-section.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          {
            path: '',
            component: RightSectionComponent,
            children: [
              {path: '', pathMatch:'full', redirectTo: 'login'},
              {
                path: 'login', component: LoginComponent
              },

              {
                path: 'signup', component: SignupComponent
              },
              {
                path: 'forgot-password', component: ForgotPasswordComponent
              },
            ]
          }

        ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule {

}
