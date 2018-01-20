import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ScrUserNewComponent} from "../new/new.component";
import {ScrUserCoreModule} from "./core.module";

const USER_ROUTES: Route[] = [
  { path: 'register', redirectTo: 'user/new' },
  {
    path: 'user',
    children: [
      { path: 'new', component: ScrUserNewComponent }
    ]
  }
]

@NgModule({
  imports: [
    ScrUserCoreModule,
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
