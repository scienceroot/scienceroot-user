import {Component, Input} from "@angular/core";
import {ScrUser} from "../../core/user.model";

@Component({
  selector: 'scr-user-edit-wallet-info',
  template: `
    <ng-container *ngIf="!user.publicAddress">
      <div class="container">
        <div fxLayout="row">
          <div  fxFlex="64px"
                fxFlexAlign="center">
            <mat-icon class="scr-primary-text">account_balance_wallet</mat-icon>
          </div>
          <div fxFlex=""
               fxFlexAlign="center">
            <p class="scr-primary-text">
              You haven't added a wallet to your account yet.
            </p>
          </div>
          <div fxFlex="100px"
               fxFlexAlign="center">
            <a mat-button=""
               color="accent"
               [routerLink]="['/user', user.uid, 'wallet']">
              Add wallet
            </a>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [`
    .container {
      border: 2px solid #2196F3;
      border-radius: 2px;
      padding: 24px;
    }
  `]
})
export class ScrUserEditWalletInfoComponent {

  @Input() user: ScrUser;
}
