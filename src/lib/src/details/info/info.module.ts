import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoComponent} from "./info.component";
import {CommonModule} from "@angular/common";
import {ScrUserProfileModule} from "../profile/profile.module";
import {ScrUserDetailsInfoJobsModule} from "./jobs/jobs.module";
import {ScrUserDetailsInfoInterestsModule} from "./interests/interests.module";

@NgModule({
  imports: [
    CommonModule,
    ScrUserProfileModule,
    ScrUserDetailsInfoJobsModule,
    ScrUserDetailsInfoInterestsModule
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
