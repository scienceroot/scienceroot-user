import {NgModule} from "@angular/core";
import {ScrUserEditJobsComponent} from "./jobs.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatDialogModule, MatIconModule} from "@angular/material";
import {ScrUserEditJobsAddModule} from "./add/add.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ScrUserEditJobsAddModule
  ],
  declarations: [
    ScrUserEditJobsComponent
  ],
  exports: [
    ScrUserEditJobsComponent
  ],
  providers: []
})
export class ScrUserEditJobsModule {

}
