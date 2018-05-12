import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-details-info-jobs',
  template: `
    <div class="jobs">
      <div class="jobs--headline">
        <span class="mat-headline">Work experience</span>
      </div>
      <ng-container *ngIf="user.jobs && user.jobs.length > 0; then jobsList else noJobs;">
      </ng-container>
        
    </div>
    
    <ng-template #noJobs>
      <span class="mat-body-1">
        No jobs added yet.
      </span>
    </ng-template>
    
    <ng-template #jobsList>
      <ng-container *ngFor="let job of user.jobs">
        <scr-user-job [job]="job">
        </scr-user-job>
      </ng-container>
    </ng-template>
  `,
  styles: [`
    .jobs .jobs--headline mat-icon {
      margin-right: 16px;
      width: 24px;
      height: 24px;
      font-size: 24px;
    }
  `]
})
export class ScrUserDetailsInfoJobsComponent {

  @Input() user: ScrUser;
}
