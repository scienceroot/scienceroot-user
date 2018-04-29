import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {ScrUserFollowButtonComponent} from './follow-btn.component';
import {ScrUserFollowerService} from './follower.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    ScrUserFollowButtonComponent
  ],
  exports: [
    ScrUserFollowButtonComponent
  ],
  providers: [
    ScrUserFollowerService
  ]
})
export class ScrUserFollowModule {

}
