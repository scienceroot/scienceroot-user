import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoComponent} from "./info.component";
import {CommonModule} from "@angular/common";
import {ScrUserProfileModule} from "../profile/profile.module";
import {ScrUserDetailsInfoJobsModule} from "./jobs/jobs.module";
import {ScrUserDetailsInfoInterestsModule} from "./interests/interests.module";
import {MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
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
