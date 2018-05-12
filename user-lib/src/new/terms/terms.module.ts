import {NgModule} from "@angular/core";
import {ScrUserNewTermsComponent} from "./terms.component";
import {MatCheckboxModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    MatCheckboxModule
  ],
  declarations: [
    ScrUserNewTermsComponent
  ],
  exports: [
    ScrUserNewTermsComponent
  ],
  providers: []
})
export class ScrUserNewTermsModule {

}
