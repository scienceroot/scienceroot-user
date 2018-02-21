import {NgModule} from "@angular/core";
import {ScrUserNewModule} from "../new/new.module";
import {ScrUserService} from "./user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ScrActiveUserService} from "./active-user.service";
import {ScrSecureHttpClientModule} from "@scienceroot/security";

export * from './user.model';
export * from './user.resolver';
export * from './user.service';
export * from './active-user.service';

@NgModule({
  imports: [
    ScrUserNewModule
  ],
  declarations: [],
  exports: [
  ],
  providers: [
    ScrUserService,
    ScrActiveUserService
  ]
})
export class ScrUserCoreModule {

}
