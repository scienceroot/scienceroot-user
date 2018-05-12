import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoInterestsComponent} from "./interests.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatChipsModule, MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [
    ScrUserDetailsInfoInterestsComponent
  ],
  exports: [
    ScrUserDetailsInfoInterestsComponent
  ],
  providers: []
})
export class ScrUserDetailsInfoInterestsModule {

}
