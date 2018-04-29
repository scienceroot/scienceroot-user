import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrUserFollowModule} from '../../core/follower/follower.module';
import {ScrUserProfileModule} from '../profile/profile.module';
import {ScrUserDetailsFollowsComponent} from './follows.component';

@NgModule({
  imports: [
    CommonModule,
    ScrLoadingModule,
    ScrUserFollowModule,
    ScrUserProfileModule
  ],
  declarations: [
    ScrUserDetailsFollowsComponent
  ],
  exports: [],
  providers: []
})
export class ScrUserDetailsFollowsModule {

}
