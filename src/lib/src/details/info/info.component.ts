import {Component} from "@angular/core";
import {ScrUser} from "../../core/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div class="jobs">
        <div class="mat-display-1 jobs--headline">
          <mat-icon>
            work
          </mat-icon>
          <span>
            Jobs
          </span>
        </div>
        <ng-container *ngFor="let job of user.jobs">
          <div class="job">
            <span class="mat-title">
               {{ job.title?.displayName }}
            </span>
            <span class="mat-subheading-1 job--spacer">
              at
            </span>
            <span class="mat-title">
              {{ job.employer }}
            </span>
            <span class="mat-subheading-1">
              ({{ job.industry?.displayName }})
            </span>
          </div>
        </ng-container>
      </div>
    </scr-user-profile>
  `,
  styles: [`
    .jobs .jobs--headline mat-icon {
      margin-right: 16px; 
    }
    
    .job {
      margin: 12px 0;  
    }
    
    .job .job--spacer {
      display: inline-block;
      margin: 0 8px;
    }
  `]
})
export class ScrUserDetailsInfoComponent {

  public user: ScrUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
