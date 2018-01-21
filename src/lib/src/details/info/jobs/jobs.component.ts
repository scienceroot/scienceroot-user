import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-details-info-jobs',
  template: `
    <div class="jobs">
      <div class="mat-headline jobs--headline">
        <mat-icon>
          work
        </mat-icon>
        <span>
            Jobs
          </span>
      </div>
      <ng-container *ngFor="let job of user.jobs">
        <div class="job">
            <span class="mat-subheading-1">
               {{ job.title?.displayName }}
            </span>
          <span class="mat-body-1 job--spacer">
              at
            </span>
          <span class="mat-subheading-1">
              {{ job.employer }}
            </span>
          <span class="mat-body-2">
              ({{ job.industry?.displayName }})
            </span>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    .jobs .jobs--headline mat-icon {
      margin-right: 16px;
      width: 24px;
      height: 24px;
      font-size: 24px;
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
export class ScrUserDetailsInfoJobsComponent {

  @Input() user: ScrUser;
}
