import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ScrFeedStoreConfig} from '@scienceroot/feed';
import {ScrAuthenticationModule, ScrAuthenticationStoreConfig, ScrSecureHttpClientModule} from '@scienceroot/security';
import {
  ScrActiveUserModule,
  ScrUserDetailsLinkModule,
  ScrUserRoutesModule,
  ScrUserStoreConfigModel
} from '@scienceroot/user';
import {ScrWalletStoreConfig} from '@scienceroot/wallet';
import {AppComponent} from './app.component';
import {ScrUserLinkDemoModule} from './link/link.module';


@NgModule({
  declarations: [
    AppComponent
  ],
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
    ]),
    ScrUserLinkDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const host: string = 'https://api.scienceroots.com';

    new ScrFeedStoreConfig(`${host}/posts/`).save();

    new ScrAuthenticationStoreConfig(host, 'scrAuthToken',).save();

    new ScrUserStoreConfigModel(
      `${host}/users`,
      `${host}/register`,
      `${host}/industries/`,
      `${host}/interests/`,
      `${host}/search/languages/`
    ).save();

    new ScrWalletStoreConfig(
      `${host}/users`,
      'publickey'
    ).save();
  }
}
