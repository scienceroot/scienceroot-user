import {NgModule} from '@angular/core';
import {ScrUserContactComponent} from './contact.component';
import {ScrUserContactService} from './contact.service';

@NgModule({
  imports: [],
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
