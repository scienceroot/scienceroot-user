import {NgModule} from "@angular/core";
import {ScrUserRoutesModule} from "./routes.module";
import {ScrUserNewModule} from "../new/new.module";

@NgModule({
  imports: [
    ScrUserRoutesModule,
    ScrUserNewModule
  ],
  declarations: [],
  exports: [
    ScrUserRoutesModule
  ],
  providers: []
})
export class ScrUserCoreModule {

}
