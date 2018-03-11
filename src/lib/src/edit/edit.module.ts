import {NgModule} from "@angular/core";
import {ScrUserEditComponent} from "./edit.component";
import {ScrUserEditJobsModule} from "./jobs/jobs.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {ScrUserEditInterestsModule} from "./interests/interests.module";
import {ScrUserEditWalletInfoModule} from "./wallet-info/wallet-info.module";
import {ScrUserEditLanguagesModule} from "./languages/languages.module";

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrUserEditWalletInfoModule,
    ScrUserEditJobsModule,
    ScrUserEditInterestsModule,
    ScrUserEditLanguagesModule
  ],
  declarations: [
    ScrUserEditComponent
  ],
  exports: [
    ScrUserEditComponent
  ],
  providers: []
})
export class ScrUserEditModule {

}
