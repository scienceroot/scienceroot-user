import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoComponent} from "./info.component";
import {CommonModule} from "@angular/common";
import {ScrUserProfileModule} from "../profile/profile.module";
import {MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ScrUserProfileModule
  ],
  declarations: [
    ScrUserDetailsInfoComponent
  ],
  exports: [
    ScrUserDetailsInfoComponent
  ],
  providers: []
})
export class ScrUserDetailsInfoModule {

}
