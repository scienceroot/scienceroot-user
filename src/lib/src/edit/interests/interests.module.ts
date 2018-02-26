import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScrUserEditInterestsComponent} from "./interests.component";
import {MatButtonModule, MatDialogModule, MatIconModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrUserEditInterestsAddModule} from "./add/add.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ScrUserEditInterestsAddModule
  ],
  declarations: [
    ScrUserEditInterestsComponent
  ],
  exports: [
    ScrUserEditInterestsComponent
  ]
})
export class ScrUserEditInterestsModule {

}
