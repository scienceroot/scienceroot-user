import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatAutocompleteModule, MatButtonModule, MatDialogModule, MatInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ScrUserEditInterestsAddComponent} from "./add.component";
import {ScrInterestModule} from "../../../core/interest/interest.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule,
    ScrInterestModule
  ],
  declarations: [
    ScrUserEditInterestsAddComponent
  ],
  exports: [
    ScrUserEditInterestsAddComponent
  ],
  providers: [],
  entryComponents: [
    ScrUserEditInterestsAddComponent
  ]
})
export class ScrUserEditInterestsAddModule {

}
