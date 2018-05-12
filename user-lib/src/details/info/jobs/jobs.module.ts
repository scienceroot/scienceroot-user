import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoJobsComponent} from "./jobs.component";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material";
import {ScrUserJobModule} from "../../../core/job/job.module";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ScrUserJobModule
  ],
  declarations: [
    ScrUserDetailsInfoJobsComponent
  ],
  exports: [
    ScrUserDetailsInfoJobsComponent
  ],
  providers: []
})
export class ScrUserDetailsInfoJobsModule {

}
