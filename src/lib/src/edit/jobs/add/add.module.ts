import {NgModule} from "@angular/core";
import {ScrUserEditJobsAddComponent} from "./add.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatAutocompleteModule, MatButtonModule, MatDialogModule, MatInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ScrIndustryModule} from "../../../core/industry/industry.module";

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
    ScrIndustryModule
  ],
  declarations: [
    ScrUserEditJobsAddComponent
  ],
  exports: [
    ScrUserEditJobsAddComponent
  ],
  providers: [],
  entryComponents: [
    ScrUserEditJobsAddComponent
  ]
})
export class ScrUserEditJobsAddModule {

}
