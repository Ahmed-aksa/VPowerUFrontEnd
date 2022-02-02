import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountComponent} from "./Modules/account/account.component";
import {AccountModule} from "./Modules/account/account.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
