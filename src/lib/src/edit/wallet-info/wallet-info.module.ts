import {NgModule} from "@angular/core";
import {ScrUserEditWalletInfoComponent} from "./wallet-info.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatIconModule} from "@angular/material";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    ScrUserEditWalletInfoComponent
  ],
  exports: [
    ScrUserEditWalletInfoComponent
  ],
  providers: []
})
export class ScrUserEditWalletInfoModule {

}
