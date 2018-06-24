import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrUserFollowModule} from '../../core/follower/follower.module';
import {ScrUserProfileModule} from '../profile/profile.module';
import {ScrUserDetailsFollowedByComponent} from './followedBy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrUserFollowModule,
    ScrUserProfileModule
  ],
  declarations: [
    ScrUserDetailsFollowedByComponent
  ],
  exports: [
    ScrUserDetailsFollowedByComponent
  ],
  providers: []
})
export class ScrUserDetailsFollowedByModule {

}
