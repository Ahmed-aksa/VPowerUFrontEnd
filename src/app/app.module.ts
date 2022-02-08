import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountComponent} from "./Modules/account/account.component";
import {AccountModule} from "./Modules/account/account.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ErrorComponent} from "./error/error.component";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
