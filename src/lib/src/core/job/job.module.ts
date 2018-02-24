import {NgModule} from "@angular/core";
import {ScrUserJobService} from "./job.service";

export * from './job.model';
export * from './job.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ScrUserJobService
  ]
})
export class ScrUserJobModule {

}
