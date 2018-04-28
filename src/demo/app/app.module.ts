import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ScrActiveUserModule, ScrUserDetailsLinkModule, ScrUserRoutesModule, ScrUserStoreConfigModel} from "user";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  ScrAuthenticationLoginComponent,
  ScrAuthenticationModule,
  ScrAuthenticationStoreConfig,
  ScrSecureHttpClientModule
} from '@scienceroot/security';
import {RouterModule} from "@angular/router";
import {ScrWalletStoreConfig} from "@scienceroot/wallet";
import {ScrUserLinkDemoModule} from "./link/link.module";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrActiveUserModule,
    ScrUserRoutesModule,
    ScrUserDetailsLinkModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/user/me', pathMatch: 'full'},
      {path: 'login', component: ScrAuthenticationLoginComponent}
    ]),
    ScrUserLinkDemoModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private host: string = 'https://api.scienceroots.com';
  //private host: string = 'http://localhost:8080';

  constructor() {
    new ScrAuthenticationStoreConfig(
      'scrAuthToken',
      `${this.host}/register`,
      `${this.host}/login`,
      `${this.host}/token`,
    ).save();

    new ScrUserStoreConfigModel(
      `${this.host}/users`,
      `${this.host}/register`,
      `${this.host}/industries/`,
      `${this.host}/interests/`,
      `${this.host}/search/languages/`
    ).save();

    new ScrWalletStoreConfig(
      `${this.host}/users`,
      'publickey'
    ).save();
  }
}

