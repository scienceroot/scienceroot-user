import {NgModule} from "@angular/core";
import {ScrWalletCoreModule, ScrWalletNewModule, ScrWalletShowModule} from "@scienceroot/wallet";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ScrUserWalletComponent} from "./wallet.component";

export * from './wallet.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ScrWalletCoreModule,
    ScrWalletShowModule,
    ScrWalletNewModule
  ],
  declarations: [
    ScrUserWalletComponent
  ],
  exports: [
    ScrUserWalletComponent
  ],
  providers: []
})
export class ScrUserWalletModule {

}
