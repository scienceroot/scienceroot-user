import {Component} from "@angular/core";
import {ScrUser} from "../core/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: '',
  template: `

    <div class="mat-display-3">
      <span>{{user.lastname}} {{user.forename}} | Edit</span>
    </div>
    
    <scr-user-edit-interests [interests]="user.interests">
    </scr-user-edit-interests>
    
    <scr-user-edit-jobs [jobs]="user.jobs">
    </scr-user-edit-jobs>
    
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
  
  `]
})
export class ScrUserEditComponent {

  public user: ScrUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
