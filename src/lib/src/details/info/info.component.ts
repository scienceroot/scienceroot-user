import {Component} from "@angular/core";
import {ScrUser} from "../../core/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div>
        <scr-user-details-info-jobs [user]="user">
        </scr-user-details-info-jobs>
      </div>
      
    </scr-user-profile>
  `,
  styles: [`
    
  `]
})
export class ScrUserDetailsInfoComponent {

  public user: ScrUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
