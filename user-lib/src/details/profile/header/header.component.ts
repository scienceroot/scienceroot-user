import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";
import {ScrActiveUserService} from "../../../active/active-user.service";

@Component({
  selector: 'scr-user-profile-header',
  template: `
    <div  fxLayout="row"
          fxLayoutGap="24px">
      <div fxFlex="">
        <div class="scr-primary-text">
          <div>
            <span class="mat-display-3">
              {{ user.forename }} {{ user.lastname }}
            </span>
            <span class="mat-display-1">
              ({{ user.mail }})
            </span>
          </div>
        </div>
        <div>
          <span class="mat-headline">
            {{ user.address?.toString() }}
          </span>
        </div>
      </div>
      <div  fxFlex="100px"
            fxFlexAlign="center">
        <scr-user-follow-button [userId]="user.uid">
        </scr-user-follow-button>
      </div>
    </div>
  `,
  styles: [`
    .profile--avatar mat-icon {
      width: 90px;
      height: 90px;
      font-size: 90px;
    }
  `]
})
export class ScrUserProfileHeaderComponent {

  @Input() user: ScrUser;

  public activeUser: ScrUser;

  constructor(private activeUserService: ScrActiveUserService) {
    this.activeUser = this.activeUserService.get();
  }
}
