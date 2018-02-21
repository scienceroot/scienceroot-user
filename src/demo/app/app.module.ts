import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ScrUserDetailsLinkModule, ScrUserRoutesModule} from "user";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  ScrAuthenticationLoginComponent, ScrAuthenticationModule,
  ScrAuthenticationTokenStoreConfig, ScrSecureHttpClientModule
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
    new ScrAuthenticationTokenStoreConfig('scrAuthToken').save();
  }


}

