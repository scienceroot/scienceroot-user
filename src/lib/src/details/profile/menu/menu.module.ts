import {NgModule} from "@angular/core";
import {ScrUserProfileMenuComponent} from "./menu.component";
import {MatTabsModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  declarations: [
    ScrUserProfileMenuComponent
  ],
  exports: [
    ScrUserProfileMenuComponent
  ],
  providers: []
})
export class ScrUserProfileMenuModule {

}
