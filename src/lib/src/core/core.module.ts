import {NgModule} from "@angular/core";
import {ScrUserNewModule} from "../new/new.module";
import {ScrUserService} from "./user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ScrActiveUserService} from "./active-user.service";

export * from './user.model';
export * from './user.resolver';
export * from './user.service';
export * from './active-user.service';

@NgModule({
  imports: [
    HttpClientModule,
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
