import {NgModule} from "@angular/core";
import {ScrUserNewDataComponent} from "./data.component";
import {MatCheckboxModule, MatInputModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [
    ScrUserNewDataComponent
  ],
  exports: [
    ScrUserNewDataComponent
  ],
  providers: []
})
export class ScrUserNewDataModule {

}
