import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ScrFeedUserModule} from '@scienceroot/feed';
import {ScrActiveUserModule} from '../../active/active.module';
import {ScrUserProfileModule} from '../profile/profile.module';
import {ScrUserDetailsNewsfeedComponent} from './newsfeed.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ScrFeedUserModule,
    ScrActiveUserModule,
    ScrUserProfileModule,
  ],
  declarations: [
    ScrUserDetailsNewsfeedComponent
  ],
  exports: [
    ScrUserDetailsNewsfeedComponent
  ],
  providers: []
})
export class ScrUserDetailsNewsfeedModule {

}
