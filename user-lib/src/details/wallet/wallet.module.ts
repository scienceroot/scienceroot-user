import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {ScrLoadingModule} from '@scienceroot/design';
import {ScrWalletCoreModule, ScrWalletNewModule, ScrWalletShowModule} from '@scienceroot/wallet';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ScrUserWalletComponent} from './wallet.component';
import {ScrUserProfileModule} from '../profile/profile.module';

export * from './wallet.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrLoadingModule,
    ScrWalletCoreModule,
    ScrWalletShowModule,
    ScrWalletNewModule,
    ScrUserProfileModule
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
