import {NgModule} from "@angular/core";
import {ScrUserDetailsLinkContainerComponent} from "./link-container.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatIconModule, MatMenuModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrUserDetailsLinkLoginModule} from "./login/login.module";
import {ScrUserDetailsLinkMenuModule} from "./menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ScrUserDetailsLinkLoginModule,
    ScrUserDetailsLinkMenuModule
  ],
  declarations: [
    ScrUserDetailsLinkContainerComponent
  ],
  exports: [
    ScrUserDetailsLinkContainerComponent
  ],
  providers: []
})
export class ScrUserDetailsLinkModule {

}
