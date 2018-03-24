import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScrUserLanguage} from "../../core/language/language.model";
import {ScrUserEditLanguagesAddComponent} from "./add/add.component";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {ScrUserService} from "../../core/user.service";
import {ScrUser} from "../../core/user.model";

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
        <div fxLayout="row">
          <div  fxFlex=""
                class="language">
            <span class="mat-title scr-primary-text">{{ language.name }}</span>
          </div>
          <div fxFlex="">
            <button mat-icon-button=""
                    color="accent"
                    (click)="deleteLanguage(language)">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
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
    private _userService: ScrUserService
  ) {
  }

  public showAdd() {
    let config: MatDialogConfig = new MatDialogConfig();

    this.dialogRef = this.dialog.open(ScrUserEditLanguagesAddComponent, config);
    this.dialogRef.afterClosed().subscribe((language: ScrUserLanguage) => {
      if (!!language) {
        this._userService
          .addLanguage(language)
          .then((user: ScrUser) => this.languages = user.languages);
      }
    })
  }

  public deleteLanguage(languageToDelete: ScrUserLanguage) {
    this._userService.removeLanguage(languageToDelete)
      .then(() => {
        let index = this.languages.findIndex((language: ScrUserLanguage) => language.id === languageToDelete.id);

        if(index > -1) {
          this.languages.splice(index, 1);
        }
      })
  }
}
