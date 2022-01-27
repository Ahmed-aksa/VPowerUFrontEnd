import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [
        AccountRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [


    SignupComponent,
                 LoginComponent
  ],
    providers: [

    ]
})
export class AccountModule {

}
