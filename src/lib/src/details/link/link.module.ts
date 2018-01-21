import {NgModule} from "@angular/core";
import {ScrUserDetailsLinkComponent} from "./link.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [
    ScrUserDetailsLinkComponent
  ],
  exports: [
    ScrUserDetailsLinkComponent
  ],
  providers: []
})
export class ScrUserDetailsLinkModule {

}
