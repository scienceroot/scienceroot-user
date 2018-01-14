import {NgModule} from "@angular/core";
import {ScrUserNewInfoComponent} from "./info.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule, MatSelectModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    ScrUserNewInfoComponent
  ],
  exports: [
    ScrUserNewInfoComponent
  ],
  providers: []
})
export class ScrUserNewInfoModule {

}
