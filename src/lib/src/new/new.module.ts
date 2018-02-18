import {NgModule} from "@angular/core";
import {ScrUserNewComponent} from "./new.component";
import {MatButtonModule, MatInputModule} from "@angular/material";
import {ScrUserNewTypeModule} from "./type/type.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {ScrUserNewInfoModule} from "./info/info.module";
import {ScrUserNewPasswordModule} from "./password/password.module";
import {ScrUserNewTermsModule} from "./terms/terms.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export * from './new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ScrUserNewTypeModule,
    ScrUserNewPasswordModule,
    ScrUserNewTermsModule,
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
