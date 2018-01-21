import {Component} from "@angular/core";

@Component({
  selector: 'scr-user-details-link',
  template: `
    <div class="user-details-link">
      <ng-container *ngIf="authenticated; then profileLink else login">
      </ng-container>
    </div>
    
    <ng-template #profileLink>
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
        <button mat-menu-item>
          <mat-icon>
            home
          </mat-icon>
          <span>Your profile</span>
        </button>
        <button mat-menu-item>
          <mat-icon>
            message
          </mat-icon>
          <span>Messages</span>
        </button>
        <button mat-menu-item>
          <mat-icon>
            close
          </mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
      
    </ng-template>

    <ng-template #login>
      <scr-user-details-link-login>
      </scr-user-details-link-login>
    </ng-template>
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
export class ScrUserDetailsLinkContainerComponent {

  public authenticated: boolean = false;
}