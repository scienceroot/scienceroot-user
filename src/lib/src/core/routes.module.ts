import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ScrUserNewComponent} from "../new/new.component";
import {ScrUserCoreModule} from "./core.module";
import {ScrTermsAndConditionsComponent} from "../terms/terms.component";
import {ScrTermsAndConditionsModule} from "../terms/terms.module";
import {ScrUserResolver} from "./user.resolver";
import {ScrUserDetailsInfoComponent} from "../details/info/info.component";
import {ScrUserDetailsModule} from "../details/details.module";

const USER_ROUTES: Route[] = [
  {
    path: 'register',
    redirectTo: 'user/new'
  },
  {
    path: 'user',
    children: [
      {
        path: 'new',
        component: ScrUserNewComponent
      },
      {
        path: 'terms',
        component: ScrTermsAndConditionsComponent
      },
      {
        path: ':userId',
        children: [
          {
            path: 'info',
            resolve: {
              user: ScrUserResolver
            },
            component: ScrUserDetailsInfoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    ScrUserCoreModule,
    ScrUserDetailsModule,
    ScrTermsAndConditionsModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    ScrUserResolver
  ]
})
export class ScrUserRoutesModule {

}
