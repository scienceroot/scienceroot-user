import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrWallet} from '@scienceroot/wallet';
import {ScrUserService} from '../../core/user.service';
import {ScrUser} from '../../core/user.model';

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div>
        <ng-container *ngIf="!!publicKey; then existingWallet else newWallet;">
        </ng-container>
      </div>
    </scr-user-profile>

    <ng-template #newWallet>
      <scr-loading [waitFor]="walletReq">
        <div onInit>
          <div class="container">
            <scr-wallet-new (walletCreate)="onWalletCreationFinished($event)">
            </scr-wallet-new>
          </div>
        </div>  
      </scr-loading>
      
    </ng-template>

    <ng-template #existingWallet>
      <div  fxLayout="row"
            fxLayoutGap="24px"
            fxLayoutAlign="end">
        <div fxFlex="100px">
          <button mat-button=""
                  (click)="resetWallet()">
            <span>New wallet</span>
          </button>
        </div>
      </div>
      <scr-wallet-show [publicKey]="publicKey">
      </scr-wallet-show>
    </ng-template>
  `,
  styles: [`
    .container {
      margin: 6px 0;
    }
  `]
})
export class ScrUserWalletComponent {

  public user: ScrUser;
  public publicKey: string;
  public walletReq: Promise<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: ScrUserService
  ) {
    this.user = this._activatedRoute.snapshot.data.user;
    this.publicKey = this.user.publicAddress;
  }

  public onWalletCreationFinished(newWallet: ScrWallet) {
    console.log(newWallet)
    this.publicKey = newWallet.getPublicKey();
    this.walletReq = this._userService.setPublicAddress(this.user.uid, newWallet.getPublicKey());
  }

  public resetWallet() {
    this.publicKey = null;
  }
}
