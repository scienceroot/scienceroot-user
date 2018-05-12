import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoLanguageComponent} from "./languages.component";
import {MatChipsModule, MatIconModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [
    ScrUserDetailsInfoLanguageComponent
  ],
  exports: [
    ScrUserDetailsInfoLanguageComponent
  ],
  providers: []
})
export class ScrUserDetailsInfoLanguageModule {

}
