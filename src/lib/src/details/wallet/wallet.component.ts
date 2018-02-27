import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ScrUser} from "../../core/user.model";
import { Location } from '@angular/common';

@Component({
  selector: '',
  template: `
    <div>
      <ng-container *ngIf="!!this.user.publicAddress; then existingWallet else newWallet;">
      </ng-container>
    </div>
    
    <ng-template #newWallet>
      <scr-wallet-new [userId]="this.user.uid"
                      (onWalletCreationFinished)="onWalletCreationFinished()">
      </scr-wallet-new>
    </ng-template>

    <ng-template #existingWallet>
      <scr-wallet-show>
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
