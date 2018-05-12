import {NgModule} from "@angular/core";
import {ScrUserEditLanguagesAddComponent} from "./add.component";
import {MatAutocompleteModule, MatButtonModule, MatDialogModule, MatInputModule} from "@angular/material";
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
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  declarations: [
    ScrUserEditLanguagesAddComponent
  ],
  exports: [
    ScrUserEditLanguagesAddComponent
  ],
  providers: [],
  entryComponents: [
    ScrUserEditLanguagesAddComponent
  ]
})
export class ScrUserEditLanguagesAddModule {

}
