import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {ScrUserEditInterestsAddComponent} from "./add/add.component";
import {ScrUserService} from "../../core/user.service";
import {ScrUserFieldOfInterest} from "../../core";
import {ScrUser} from "../../core/user.model";

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
            <button mat-button=""
                    (click)="showAdd()"
                    color="accent">
              <mat-icon>add</mat-icon>
              <span>Add Interest</span>
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
        <div fxLayout="row">
          <div fxFlex=""
               class="interest">
            <span class="mat-title scr-primary-text">{{ interest.name }}</span>
          </div>
          <div fxFlex="40px">
            <button mat-icon-button=""
                    color="accent"
                    (click)="deleteInterest(interest)">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
      </ng-container>
    </ng-template>
  `,
  styles: [`
    .interests--actions { padding: 12px 0; }
  `]
})
export class ScrUserEditInterestsComponent {

  @Input() interests: ScrUserFieldOfInterest[];

  @Output() interestsChanged: EventEmitter<ScrUserFieldOfInterest[]> = new EventEmitter<ScrUserFieldOfInterest[]>();

  private dialogRef: MatDialogRef<ScrUserEditInterestsAddComponent>;

  constructor(
    private dialog: MatDialog,
    private _userService: ScrUserService
  ) {
  }

  public showAdd() {
    let config: MatDialogConfig = new MatDialogConfig();

    this.dialogRef = this.dialog.open(ScrUserEditInterestsAddComponent, config);
    this.dialogRef.afterClosed().subscribe((interest: ScrUserFieldOfInterest) => {
      if (!!interest) {
        this._userService
          .addInterest(interest)
          .then((user: ScrUser) => this.interests = user.interests);
      }
    });
  }

  public deleteInterest(interestToRemove: ScrUserFieldOfInterest) {
    this._userService.removeInterest(interestToRemove)
      .then(() => {
        let index = this.interests.findIndex((interest: ScrUserFieldOfInterest) => interest.id === interestToRemove.id);

        if(index > -1) {
          this.interests.splice(index, 1);
        }
      });
  }
}
