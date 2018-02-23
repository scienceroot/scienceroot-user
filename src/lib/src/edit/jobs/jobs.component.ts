import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrUserJob} from "../../core/job.model";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {ScrUserEditJobsAddComponent} from "./add/add.component";

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
      <div class="jobs--list">
        <ng-container *ngFor="let job of jobs;">
          <span>{{ job.title }}</span>
          <span>{{ job.industry.name }}</span>
          <span>{{ job.employer }}</span>
        </ng-container>
      </div>
      <div class="jobs--actions">
        <div fxLayout="row">
          <div fxFlex="64px">
            <button mat-icon-button=""
                    (click)="showAdd($event)"
                    color="accent">
              <mat-icon>add</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserEditJobsComponent {

  @Input() jobs: ScrUserJob[];

  @Output() jobsChange: EventEmitter<ScrUserJob[]> = new EventEmitter();

  private dialogRef: MatDialogRef<ScrUserEditJobsAddComponent>;

  constructor(private dialog: MatDialog) {

  }

  public showAdd() {
    let config: MatDialogConfig = new MatDialogConfig();

    this.dialogRef = this.dialog.open(ScrUserEditJobsAddComponent, config);

    this.dialogRef.afterClosed().subscribe((job: ScrUserJob) => {
      if(!!job) {

      }
    })
  }
}
