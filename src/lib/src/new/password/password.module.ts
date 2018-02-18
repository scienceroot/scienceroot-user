import {NgModule} from "@angular/core";
import {ScrUserNewPasswordComponent} from "./password.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material";
import {PasswordConfirmationValidator} from "./password-confirmation-validator.directive";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    MatInputModule
  ],
  declarations: [
    PasswordConfirmationValidator,
    ScrUserNewPasswordComponent
  ],
  exports: [ScrUserNewPasswordComponent],
  providers: []
})
export class ScrUserNewPasswordModule {

}
