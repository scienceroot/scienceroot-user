import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ScrUserRoutesModule} from "user";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'user/new' }
    ]),
    ScrUserRoutesModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


  constructor() {
  }


}

