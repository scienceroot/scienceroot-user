import {NgModule} from "@angular/core";
import {ScrUserProfileComponent} from "./profile.component";
import {ScrUserProfileHeaderModule} from "./header/header.module";
import {ScrUserProfileMenuModule} from "./menu/menu.module";

@NgModule({
  imports: [
    ScrUserProfileHeaderModule,
    ScrUserProfileMenuModule
  ],
  declarations: [
    ScrUserProfileComponent
  ],
  exports: [
    ScrUserProfileComponent
  ],
  providers: []
})
export class ScrUserProfileModule {

}
