import {NgModule} from '@angular/core';
import {ScrIndustryService} from './industry.service';

export * from './industry.model';
export * from './industry.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ScrIndustryService
  ]
})
export class ScrIndustryModule {

}
