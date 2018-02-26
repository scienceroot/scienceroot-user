import {NgModule} from "@angular/core";
import {ScrUserEditComponent} from "./edit.component";
import {ScrUserEditJobsModule} from "./jobs/jobs.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {ScrUserEditInterestsModule} from "./interests/interests.module";

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrUserEditJobsModule,
    ScrUserEditInterestsModule
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
