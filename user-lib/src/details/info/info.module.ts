import {NgModule} from "@angular/core";
import {ScrUserContactModule} from '../../core/contact/contact.module';
import {ScrUserDetailsInfoComponent} from "./info.component";
import {CommonModule} from "@angular/common";
import {ScrUserProfileModule} from "../profile/profile.module";
import {ScrUserDetailsInfoJobsModule} from "./jobs/jobs.module";
import {ScrUserDetailsInfoInterestsModule} from "./interests/interests.module";
import {MatDividerModule, MatIconModule} from "@angular/material";
import {ScrUserDetailsInfoLanguageModule} from "./languages/languages.module";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    ScrUserContactModule,
    ScrUserProfileModule,
    ScrUserDetailsInfoJobsModule,
    ScrUserDetailsInfoInterestsModule,
    ScrUserDetailsInfoLanguageModule
  ],
  declarations: [
    ScrUserDetailsInfoComponent
  ],
  exports: [
    ScrUserDetailsInfoComponent
  ],
  providers: []
})
export class ScrUserDetailsInfoModule {

}
