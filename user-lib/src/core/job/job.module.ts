import {NgModule} from '@angular/core';
import {ScrUserJobService} from './job.service';
import {ScrUserJobComponent} from './job.component';
import {CommonModule} from '@angular/common';

export * from './job.model';
export * from './job.service';
export * from './job.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrUserJobComponent
  ],
  exports: [
    ScrUserJobComponent
  ],
  providers: [
    ScrUserJobService
  ]
})
export class ScrUserJobModule {

}
