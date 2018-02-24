import {NgModule} from "@angular/core";
import {ScrActiveUserService} from "./active-user.service";
import {ScrUserCoreModule} from "../core/core.module";
import {ScrAuthenticationModule, ScrSecureHttpClientModule} from "@scienceroot/security";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrUserCoreModule
  ],
  declarations: [],
  exports: [],
  providers: [
    ScrActiveUserService
  ]
})
export class ScrActiveUserModule {

}
