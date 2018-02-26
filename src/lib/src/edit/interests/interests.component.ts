import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {ScrUserEditInterestsAddComponent} from "./add/add.component";
import {ScrUserService} from "../../core/user.service";
import {ScrUserFieldOfInterest} from "../../core";

@Component({
  selector: 'scr-user-edit-interests',
  template: `
    <div>
      <div class="interests--headline">
        <span class="mat-headline">Interests</span>
      </div>
      <ng-container *ngIf="interests && interests.length > 0; then interestsList else noInterests;">
      </ng-container>
      <div class="interests--actions">
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

    <ng-template #noInterests>
      <span class="mat-body-1">
        No interests added yet.
      </span>
    </ng-template>

    <ng-template #interestsList>
      <ng-container *ngFor="let interest of interests">
        <div class="interest">
            <span class="mat-subheading-2 scr-primary-text">
               {{ interest.name }}
            </span>
        </div>
      </ng-container>
    </ng-template>
  `
})
export class ScrUserEditInterestsComponent {

  @Input() interests: ScrUserFieldOfInterest[];

  @Output() interestsChanged: EventEmitter<ScrUserFieldOfInterest[]> = new EventEmitter<ScrUserFieldOfInterest[]>();

  private dialogRef: MatDialogRef<ScrUserEditInterestsAddComponent>;

  constructor(
    private dialog: MatDialog,
    private userService: ScrUserService
  ) {
  }

  public showAdd() {
    let config: MatDialogConfig = new MatDialogConfig();

    this.dialogRef = this.dialog.open(ScrUserEditInterestsAddComponent, config);
    this.dialogRef.afterClosed().subscribe((interest: ScrUserFieldOfInterest) => {
      if (!!interest) {
        this.userService
          .addInterest(interest)
          .then(user => this.interests = user.interests);
      }
    })
  }

}
