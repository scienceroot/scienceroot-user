import {Component, Input} from "@angular/core";
import {ScrUser} from "../../core/user.model";

@Component({
  selector: 'scr-user-profile',
  template: `
    <div class="header-container">
      <scr-user-profile-header [user]="user">
      </scr-user-profile-header>
    </div>
    <div class="menu-container">
      <scr-user-profile-menu [user]="user">
      </scr-user-profile-menu>
    </div>
    <div>
      <ng-content>
        
      </ng-content>
    </div>
  `,
  styles: [`
    .header-container {
      margin-bottom: 24px;
    }

    .menu-container {
      margin: 24px 0;
    }
  `]
})
export class ScrUserProfileComponent {

  @Input() user: ScrUser;

  constructor() {

  }
}
