import {NgModule} from "@angular/core";
import {ScrUserNewModule} from "../new/new.module";
import {ScrUserService} from "./user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    ScrUserNewModule
  ],
  declarations: [],
  exports: [
  ],
  providers: [
    ScrUserService
  ]
})
export class ScrUserCoreModule {

}
