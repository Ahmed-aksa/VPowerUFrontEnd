import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'account'},

  {
    path: '',
    children: [
      {path: 'account',  loadChildren: () => import('../app/account/account.module').then(m => m.AccountModule)}
    ]
  },
  {path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
