import {Component} from "@angular/core";
import {ScrUser} from "../core/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: '',
  template: `

    <div class="scr-primary-text">
      <span class="mat-display-3">
        Edit Profile
      </span>
    </div>
    <div class="section">
      <scr-user-edit-wallet-info [user]="user">
      </scr-user-edit-wallet-info>
    </div>
    <div class="section">
      <scr-user-edit-interests [interests]="user.interests">
      </scr-user-edit-interests>  
    </div>
    <div class="section">
      <scr-user-edit-jobs [jobs]="user.jobs">
      </scr-user-edit-jobs>
    </div>
    
    <div class="actions">
      <div  fxLayout="row"
            fxLayoutAlign="end">
        <div fxFlex="100px">
          <a  mat-button=""
              color="accent"
              [routerLink]="['/user', user.uid, 'info']">
            Back to Profile
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .section { padding: 24px;}
  `]
})
export class ScrUserEditComponent {

  public user: ScrUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
