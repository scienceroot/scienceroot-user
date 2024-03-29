import {Component} from "@angular/core";
import {ScrUser} from "../../core/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div class="info-section">
        <scr-user-contact [contact]="user.contact">
        </scr-user-contact>
      </div>
      <mat-divider></mat-divider>
      <div class="info-section">
        <scr-user-details-info-interests [user]="user">
        </scr-user-details-info-interests>
      </div>
      <mat-divider></mat-divider>
      <div class="info-section">
        <scr-user-details-info-languages [user]="user">
        </scr-user-details-info-languages>
      </div>
      <mat-divider></mat-divider>
      <div class="info-section">
        <scr-user-details-info-jobs [user]="user">
        </scr-user-details-info-jobs>
      </div>
    </scr-user-profile>
  `,
  styles: [`
    .info-section {
      padding: 24px 0;
    }
  `]
})
export class ScrUserDetailsInfoComponent {

  public user: ScrUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data: any) => {
      this.user = data.user;
    });
  }
}
