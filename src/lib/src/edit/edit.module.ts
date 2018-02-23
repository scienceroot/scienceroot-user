import {NgModule} from "@angular/core";
import {ScrUserEditComponent} from "./edit.component";
import {ScrUserEditJobsModule} from "./jobs/jobs.module";

@NgModule({
  imports: [
    ScrUserEditJobsModule
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
