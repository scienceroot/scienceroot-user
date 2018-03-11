import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrUserLanguage} from "../../core/language/language.model";
import {ScrUserEditLanguagesAddComponent} from "./add/add.component";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {ScrUserService} from "../../core/user.service";

@Component({
  selector: 'scr-user-edit-languages',
  template: `
    <div>
      <div class="languages--headline">
        <span class="mat-headline">Languages</span>
      </div>
      <ng-container *ngIf="languages && languages.length > 0; then languagesList else noLanguages;">
      </ng-container>
      <div class="languages--actions">
        <div fxLayout="row">
          <div fxFlex="64px">
            <button mat-button=""
                    (click)="showAdd()"
                    color="accent">
              <mat-icon>add</mat-icon>
              <span>Add Language</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ng-template #noLanguages>
      <span class="mat-body-1">
        No languages added yet.
      </span>
    </ng-template>

    <ng-template #languagesList>
      <ng-container *ngFor="let language of languages">
        <div class="language">
            <span class="mat-subheading-2 scr-primary-text">
               {{ language.name }}
            </span>
        </div>
      </ng-container>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrUserEditLanguagesComponent {

  @Input() languages: ScrUserLanguage[];

  @Output() languagesChanged: EventEmitter<ScrUserLanguage[]> = new EventEmitter();

  private dialogRef: MatDialogRef<ScrUserEditLanguagesAddComponent>;

  constructor(
    private dialog: MatDialog,
    private userService: ScrUserService
  ) {
  }

  public showAdd() {
    let config: MatDialogConfig = new MatDialogConfig();

    this.dialogRef = this.dialog.open(ScrUserEditLanguagesAddComponent, config);
    this.dialogRef.afterClosed().subscribe((language: ScrUserLanguage) => {
      if (!!language) {
        this.userService
          .addLanguage(language)
          .then(user => this.languages = user.languages);
      }
    })
  }
}
