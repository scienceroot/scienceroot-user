import {Component} from "@angular/core";
import {ScrAuthenticationLoginService} from "@scienceroot/security";
import "rxjs/add/operator/filter";
import {ScrActiveUserService} from "../../active/active-user.service";
import {ScrUser} from "../../core/user.model";

@Component({
  selector: 'scr-user-details-link',
  template: `
    <div class="user-details-link">
      <ng-container *ngIf="!!activeUser; then profileLink else login">
      </ng-container>
    </div>
    
    <ng-template #profileLink>
      <scr-user-details-link-menu [activeUser]="activeUser">
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

  public activeUser: ScrUser;

  constructor(private activeUserService: ScrActiveUserService) {
    this.activeUserService.activeUserChanged
      .subscribe(user => {
        this.activeUser = user;
        console.log(user)
      });
  }

}
