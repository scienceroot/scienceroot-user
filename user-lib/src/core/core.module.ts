import {NgModule} from '@angular/core';
import {ScrUserNewModule} from '../new/new.module';
import {ScrUserService} from './user.service';

export * from './user.model';
export * from './user.resolver';
export * from './user.service';

@NgModule({
  imports: [
    ScrUserNewModule
  ],
  declarations: [],
  exports: [
  ],
  providers: [
    ScrUserService,
  ]
})
export class ScrUserCoreModule {

  constructor() {

  }
}
