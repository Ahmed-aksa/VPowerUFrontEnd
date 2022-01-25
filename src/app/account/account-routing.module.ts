import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccountComponent } from "./account.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: '', redirectTo: 'login' },
                   // { path: 'login', component: LoginComponent, canActivate: [AccountRouteGuard] },

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