import {Component} from "@angular/core";

@Component({
  selector: 'scr-user-details-link',
  template: `
    <div class="user-details-link">
      <ng-container *ngIf="authenticated; then profileLink else login">
      </ng-container>
    </div>
    
    <ng-template #profileLink>
      <scr-user-details-link-menu>
      </scr-user-details-link-menu>
    </ng-template>

    <ng-template #login>
      <scr-user-details-link-login>
      </scr-user-details-link-login>
    </ng-template>
  `,
  styles: [`
    
  `]
})
export class ScrUserDetailsLinkContainerComponent {

  public authenticated: boolean = true;
}
