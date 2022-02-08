import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./Guards/guard/auth.guard";
import {LoginGuard} from "./Guards/login.guard";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'account'},

  {
    path: '',
    children: [
      {path: 'account', canActivate: [LoginGuard],  loadChildren: () => import('./Modules/account/account.module').then(m => m.AccountModule)}
    ]
  },
  {path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {
    path: '**' , component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
