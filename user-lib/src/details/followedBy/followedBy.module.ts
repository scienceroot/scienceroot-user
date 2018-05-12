import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrUserFollowModule} from '../../core/follower/follower.module';
import {ScrUserProfileModule} from '../profile/profile.module';
import {ScrUserDetailsFollowedByComponent} from './followedBy.component';

@NgModule({
  imports: [
    CommonModule,
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
