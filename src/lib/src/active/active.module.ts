import {NgModule} from '@angular/core';
import {ScrActiveUserResolver} from './active-user.resolver';
import {ScrActiveUserService} from './active-user.service';
import {ScrUserCoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    ScrUserCoreModule
  ],
  declarations: [],
  exports: [],
  providers: [
    ScrActiveUserService,
    ScrActiveUserResolver
  ]
})
export class ScrActiveUserModule {

}
