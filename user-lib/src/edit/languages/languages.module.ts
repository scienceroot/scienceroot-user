import {NgModule} from "@angular/core";
import {ScrUserEditLanguagesAddModule} from "./add/add.module";
import {ScrUserEditLanguagesComponent} from "./languages.component";
import {MatButtonModule, MatDialogModule, MatIconModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {ScrUserLanguageModule} from "../../core/language/language.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ScrUserEditLanguagesAddModule,
    ScrUserLanguageModule
  ],
  declarations: [
    ScrUserEditLanguagesComponent
  ],
  exports: [
    ScrUserEditLanguagesComponent
  ],
  providers: []
})
export class ScrUserEditLanguagesModule {

}
