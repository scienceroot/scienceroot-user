import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrUserProfileHeaderComponent} from "./header.component";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    ScrUserProfileHeaderComponent
  ],
  exports: [
    ScrUserProfileHeaderComponent
  ],
  providers: []
})
export class ScrUserProfileHeaderModule {

}
