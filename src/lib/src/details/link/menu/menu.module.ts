import {NgModule} from "@angular/core";
import {ScrUserDetailsLinkMenuComponent} from "./menu.component";
import {MatButtonModule, MatIconModule, MatMenuModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [
    ScrUserDetailsLinkMenuComponent
  ],
  exports: [
    ScrUserDetailsLinkMenuComponent
  ],
  providers: []
})
export class ScrUserDetailsLinkMenuModule {

}
