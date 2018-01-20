import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoModule} from "./info/info.module";

export * from './info/info.module';

@NgModule({
  imports: [
    ScrUserDetailsInfoModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class ScrUserDetailsModule {

}
