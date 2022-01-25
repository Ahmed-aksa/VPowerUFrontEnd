import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path :'', pathMatch:'full', redirectTo:'account'},

  {
    path :'',
    //canActivate:[true],
    //canActivateChild:[true],
    children:[
      {path:'account', loadChildren:()=>import('../app/account/account.module').then(m=>m.AccountModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
