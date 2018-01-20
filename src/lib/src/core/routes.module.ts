import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ScrUserNewComponent} from "../new/new.component";
import {ScrUserCoreModule} from "./core.module";
import {ScrTermsAndConditionsComponent} from "../terms/terms.component";
import {ScrTermsAndConditionsModule} from "../terms/terms.module";

const USER_ROUTES: Route[] = [
  { path: 'register', redirectTo: 'user/new' },
  {
    path: 'user',
    children: [
      { path: 'new', component: ScrUserNewComponent },
      { path: 'terms', component: ScrTermsAndConditionsComponent }
    ]
  }
];

@NgModule({
  imports: [
    ScrUserCoreModule,
    ScrTermsAndConditionsModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ScrUserRoutesModule {

}
