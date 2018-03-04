import {NgModule} from "@angular/core";
import {ScrUserDetailsLinkLoginComponent} from "./login.component";
import {MatButtonModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [
    ScrUserDetailsLinkLoginComponent
  ],
  exports: [
    ScrUserDetailsLinkLoginComponent
  ],
  providers: []
})
export class ScrUserDetailsLinkLoginModule {

}
