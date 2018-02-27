import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-details-link-menu',
  template: `
    <div  fxLayout="row"
          fxLayoutAlign="center center"
          class="user-details-link-menu">
      <div fxFlex="48px">
        <button mat-icon-button
                color="accent"
                [matMenuTriggerFor]="menu">
          <mat-icon>
            account_circle
          </mat-icon>
        </button>
      </div>
    </div>

    <mat-menu #menu="matMenu">
      <a  mat-menu-item
          [routerLink]="['/user', activeUser.uid, 'info']">
        <mat-icon>
          home
        </mat-icon>
        <span>Your profile</span>
      </a>
      <button mat-menu-item
              [routerLink]="['/user', activeUser.uid, 'wallet']">
        <mat-icon>
          account_balance_wallet
        </mat-icon>
        <span>Wallet</span>
      </button>
      <button mat-menu-item>
        <mat-icon>
          close
        </mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  styles: [`
    .user-details-link-menu {
      height: 64px;
    }

    .user-details-link-menu button,
    .user-details-link-menu mat-icon {
      height: 48px;
      width: 48px;
      line-height: 48px;
    }

    .user-details-link-menu button {
      background-color: #fff;
    }

    .user-details-link-menu button /deep/ span {
      display: block;
      height: 48px;
    }

    .user-details-link-menu mat-icon {
      font-size: 48px;
    }
  `]
})
export class ScrUserDetailsLinkMenuComponent {

  @Input() activeUser: ScrUser;

  constructor() {
  }
}
