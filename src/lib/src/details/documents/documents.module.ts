import {NgModule} from "@angular/core";
import {ScrUserDetailsDocumentsComponent} from "./documents.component";
import {ScrUserProfileModule} from "../profile/profile.module";
import {MatChipsModule, MatIconModule} from "@angular/material";
import {ScrDocumentService} from "./document.model";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule,
    ScrUserProfileModule
  ],
  declarations: [
    ScrUserDetailsDocumentsComponent
  ],
  exports: [
    ScrUserDetailsDocumentsComponent
  ],
  providers: [ScrDocumentService]
})
export class ScrUserDetailsDocumentsModule {

}
