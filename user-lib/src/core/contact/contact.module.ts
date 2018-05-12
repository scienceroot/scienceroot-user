import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrUserContactComponent} from './contact.component';
import {ScrUserContactService} from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    ScrUserContactComponent
  ],
  exports: [
    ScrUserContactComponent
  ],
  providers: [
    ScrUserContactService
  ]
})
export class ScrUserContactModule {

}
