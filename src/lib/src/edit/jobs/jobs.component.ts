import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrUserJob} from "../../core/job/job.model";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {ScrUserEditJobsAddComponent} from "./add/add.component";
import {ScrUserService} from "../../core/user.service";

@Component({
  selector: 'scr-user-edit-jobs',
  template: `
    <div>
      <div class="jobs--headline">
        <mat-icon>
          work
        </mat-icon>
        <span class="mat-headline">Jobs</span>
      </div>
      <ng-container *ngIf="jobs && jobs.length > 0; then jobsList else noJobs;">
      </ng-container>
      <div class="jobs--actions">
        <div fxLayout="row">
          <div fxFlex="64px">
            <button mat-icon-button=""
                    (click)="showAdd()"
                    color="accent">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ng-template #noJobs>
      <span class="mat-body-1">
        No jobs added yet.
      </span>
    </ng-template>

    <ng-template #jobsList>
      <ng-container *ngFor="let job of jobs">
        <div class="job">
            <span class="mat-subheading-2 scr-primary-text">
               {{ job.title }}
            </span>
          <span class="mat-body-1 job--spacer">
              at
            </span>
          <span class="mat-subheading-1">
              {{ job.employer }}
            </span>
          <span class="mat-body-2">
              ({{ job.industry?.name }})
            </span>
        </div>
      </ng-container>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrUserEditJobsComponent {

  @Input() jobs: ScrUserJob[];

  @Output() jobsChange: EventEmitter<ScrUserJob[]> = new EventEmitter();

  private dialogRef: MatDialogRef<ScrUserEditJobsAddComponent>;

  constructor(
    private dialog: MatDialog,
    private userService: ScrUserService
  ) {

  }

  public showAdd() {
    let config: MatDialogConfig = new MatDialogConfig();

    this.dialogRef = this.dialog.open(ScrUserEditJobsAddComponent, config);

    this.dialogRef.afterClosed().subscribe((job: ScrUserJob) => {
      if(!!job) {
        this.userService.addJob(job).then(user => this.jobs = user.jobs);
      }
    })
  }
}
