import {NgModule} from "@angular/core";
import {ScrUserDetailsInfoModule} from "./info/info.module";
import {ScrUserWalletModule} from "./wallet/wallet.module";

export * from './info/info.module';
export * from './wallet/wallet.module';

@NgModule({
  imports: [
    ScrUserDetailsInfoModule,
    ScrUserWalletModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class ScrUserDetailsModule {

}
