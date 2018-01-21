import {Component} from "@angular/core";

@Component({
  selector: 'scr-user-details-link',
  template: `
    <div class="user-details-link">
      <ng-container *ngIf="authenticated; then profileLink else login">
      </ng-container>
    </div>
    
    <ng-template #profileLink>
      
    </ng-template>

    <ng-template #login>
      <div  fxLayout="column"
            class="menu-item"
            fxLayoutAlign="center center">
        <div  fxFlex="40px">
          <button mat-raised-button=""
                  color="accent">
            Login
          </button>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    .user-details-link, .menu-item {
      height: 64px;
    }
  `]
})
export class ScrUserDetailsLinkComponent {

  public authenticated: boolean = false;
}
