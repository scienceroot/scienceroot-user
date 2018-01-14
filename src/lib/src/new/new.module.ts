import {NgModule} from "@angular/core";
import {ScrUserNewComponent} from "./new.component";
import {MatButtonModule, MatStepperModule} from "@angular/material";
import {ScrUserNewTypeModule} from "./type/type.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrUserNewDataModule} from "./data/data.module";
import {CommonModule} from "@angular/common";
import {ScrUserNewInfoModule} from "./info/info.module";

export * from './new.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrUserNewTypeModule,
    ScrUserNewDataModule,
    ScrUserNewInfoModule
  ],
  declarations: [
    ScrUserNewComponent
  ],
  exports: [
    ScrUserNewComponent
  ],
  providers: []
})
export class ScrUserNewModule {

}
