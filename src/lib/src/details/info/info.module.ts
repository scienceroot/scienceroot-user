import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoComponent} from "./info.component";
import {CommonModule} from "@angular/common";
import {ScrUserProfileModule} from "../profile/profile.module";
import {ScrUserDetailsInfoJobsModule} from "./jobs/jobs.module";

@NgModule({
  imports: [
    CommonModule,
    ScrUserProfileModule,
    ScrUserDetailsInfoJobsModule
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
