import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ScrActiveUserModule, ScrUserDetailsLinkModule, ScrUserRoutesModule, ScrUserStoreConfigModel} from "user";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  ScrAuthenticationLoginComponent, ScrAuthenticationModule,
  ScrAuthenticationStoreConfig, ScrSecureHttpClientModule
} from "@scienceroot/security";

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      //{ path: '', pathMatch: 'full', redirectTo: '' },
      { path: 'login', component: ScrAuthenticationLoginComponent }
    ]),
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrActiveUserModule,
    ScrUserRoutesModule,
    ScrUserDetailsLinkModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


  constructor() {
    new ScrAuthenticationStoreConfig(
      'scrAuthToken',
      'https://api.scienceroots.com/register',
      'https://api.scienceroots.com/login',
      'https://api.scienceroots.com/token',
    ).save();

    new ScrUserStoreConfigModel(
      'http://localhost:8080/users',
      'http://localhost:8080/register',
      'http://localhost:8080/industries/'
    ).save();
  }
}

