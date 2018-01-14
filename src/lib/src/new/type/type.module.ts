import {NgModule} from "@angular/core";
import {ScrUserNewTypeComponent} from "./type.component";
import {MatCheckboxModule, MatIconModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrUserNewTypeLabelComponent} from "./label.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: [
    ScrUserNewTypeComponent,
    ScrUserNewTypeLabelComponent
  ],
  exports: [
    ScrUserNewTypeComponent
  ],
  providers: []
})
export class ScrUserNewTypeModule {

}
