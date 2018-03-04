import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ScrUser} from "../../core/user.model";
import { Location } from '@angular/common';

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div>
        <ng-container *ngIf="!!user.publicAddress; then existingWallet else newWallet;">
        </ng-container>
      </div>
    </scr-user-profile>
    
    <ng-template #newWallet>
      <scr-wallet-new [userId]="user.uid"
                      (onWalletCreationFinished)="onWalletCreationFinished()">
      </scr-wallet-new>
    </ng-template>

    <ng-template #existingWallet>
      <scr-wallet-show [publicAddress]="user.publicAddress">
      </scr-wallet-show>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrUserWalletComponent {

  public user: ScrUser;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.user = this.activatedRoute.snapshot.data.user;
  }

  public onWalletCreationFinished() {
    location.reload();
  }
}
