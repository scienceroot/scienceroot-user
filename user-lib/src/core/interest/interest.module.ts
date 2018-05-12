import {NgModule} from "@angular/core";
import {ScrUserFieldOfInterestService} from "./interest.service";

export * from './interest.model';
export * from './interest.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ScrUserFieldOfInterestService
  ]
})
export class ScrInterestModule {

}
