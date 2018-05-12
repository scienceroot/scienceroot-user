import {Component, Input} from "@angular/core";
import {ScrUserJob} from "./job.model";

@Component({
  selector: 'scr-user-job',
  template: `
    <div class="job">
      <div>
        <span class="mat-title scr-primary-text">{{ job.title }}</span>
        <span class="mat-caption job--spacer">at</span>
        <span class="mat-title  scr-primary-text">{{ job.employer }}</span>
        <span class="mat-subheading-1">({{ job.industry?.name }})</span>
      </div>
      <div class="mat-subheading-1">
        <span class="start">{{ job.startMonth }}/{{ job.startYear }}</span>
        <span> - </span>
        <ng-container *ngIf="!!job.endMonth && !!job.endYear">
          <span class="end">{{ job.endMonth }}/{{ job.endYear }}</span>
        </ng-container>
        <ng-container *ngIf="!job.endMonth || !job.endYear">
          <span class="end">Today</span>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`    
    .job {
      margin: 12px 0;
    }

    .job .job--spacer {
      display: inline-block;
      margin: 0 8px;
    }
  `]
})
export class ScrUserJobComponent {

  @Input() job: ScrUserJob;
}
