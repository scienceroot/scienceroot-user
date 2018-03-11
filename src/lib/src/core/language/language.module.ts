import {NgModule} from "@angular/core";
import {ScrUserLanguageService} from "./language.service";

export * from './language.model';
export * from './language.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ScrUserLanguageService
  ]
})
export class ScrUserLanguageModule {

}
