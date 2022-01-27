import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccountComponent } from "./account.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: '', redirectTo: 'login' },
                  {
                    path: 'login', component: LoginComponent
                  },

                  {
                    path: 'signup', component: SignupComponent
                  },

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
