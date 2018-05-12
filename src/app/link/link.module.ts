import {NgModule} from '@angular/core';
import {ScrUserLinkDemoComponent} from './link.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrActiveUserModule} from '@scienceroot/user';

@NgModule({
  imports: [
    FlexLayoutModule,
    ScrActiveUserModule,
    RouterModule.forChild([
      { path: 'link', component: ScrUserLinkDemoComponent }
    ])
  ],
  declarations: [
    ScrUserLinkDemoComponent
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ScrUserLinkDemoModule {

}
