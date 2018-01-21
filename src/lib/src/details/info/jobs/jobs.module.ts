import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoJobsComponent} from "./jobs.component";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
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
