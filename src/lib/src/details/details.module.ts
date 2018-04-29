import {NgModule} from "@angular/core";
import {ScrUserDetailsFollowedByModule} from './followedBy/followedBy.module';
import {ScrUserDetailsFollowsModule} from './follows/follows.module';
import {ScrUserDetailsInfoModule} from "./info/info.module";
import {ScrUserWalletModule} from "./wallet/wallet.module";

export * from './info/info.module';
export * from './wallet/wallet.module';

@NgModule({
  imports: [
    ScrUserDetailsInfoModule,
    ScrUserDetailsFollowedByModule,
    ScrUserDetailsFollowsModule,
    ScrUserWalletModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class ScrUserDetailsModule {

}
