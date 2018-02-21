import {Component, Input, OnInit} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-profile-header',
  template: `
    <div  fxLayout="row"
          fxLayoutGap="24px">
      <div fxFlex="90px">
        <div class="profile--avatar">
          <mat-icon color="primary">
            account_circle
          </mat-icon>
        </div>
      </div>
      <div fxFlex="">
        <div class="scr-primary-text">
          <div>
            <span class="mat-display-3">
              {{ user.forename }} {{ user.lastname }}
            </span>
            <span class="mat-display-1">
              ({{ user.username }})
            </span>
          </div>
        </div>
        <div>
          <span class="mat-headline">
            {{ user.address?.toString() }}
          </span>
        </div>
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
export class ScrUserProfileHeaderComponent implements OnInit {

  @Input() user: ScrUser;

  ngOnInit(): void {
    console.log(this.user)
  }
}
