import {NgModule} from "@angular/core";
import {MatButtonModule, MatIconModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrUserFollowModule} from '../../../core/follower/follower.module';
import {ScrUserProfileHeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    ScrUserFollowModule,
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
