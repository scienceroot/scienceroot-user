import {NgModule} from "@angular/core";
import {ScrUserDetailsLinkLoginComponent} from "./login.component";
import {MatButtonModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
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
