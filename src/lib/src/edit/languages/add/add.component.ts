import {Component} from "@angular/core";
import {ScrUserLanguage} from "../../../core/language/language.model";
import {FormControl} from "@angular/forms";
import {ScrUserLanguageService} from "../../../core/language/language.service";
import {MatAutocompleteSelectedEvent, MatDialogRef} from "@angular/material";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: '',
  template: `
    <div>
      <div class="header">
        <span class="mat-headline">Add a language</span>
      </div>
      <div>
        <mat-form-field>
          <input placeholder="Language"
                 aria-label="Language"
                 matInput
                 [formControl]="languageCtrl"
                 [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete"
                            [displayWith]="displayLanguage"
                            (optionSelected)="selectedLanguage($event)">
            <mat-option *ngFor="let option of languageOptions | async"
                        [value]="option">
              {{ option.name }}
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>
      </div>
      <div class="actions">
        <div  fxLayout="row"
              fxLayoutAlign="end">
          <div  fxFlex="100px">
            <button mat-button=""
                    (click)="dialogRef.close()">
              Cancel
            </button>
          </div>
          <div  fxFlex="100px">
            <button mat-raised-button=""
                    color="accent"
                    (click)="submit()">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header { margin-bottom: 24px; }
    .actions { padding: 24px 0 0 0; }

    mat-form-field, input { width: 100%; }
  `]
})
export class ScrUserEditLanguagesAddComponent {

  public language: ScrUserLanguage;
  public languageCtrl: FormControl = new FormControl();
  public languageOptions: Promise<ScrUserLanguage[]>;

  constructor(
    private languageService: ScrUserLanguageService,
    public dialogRef: MatDialogRef<ScrUserEditLanguagesAddComponent>
  ) {
    this.languageCtrl.valueChanges
      .pipe(
        debounceTime(200)
      )
      .subscribe(query => this.languageOptions = this.languageService.get(query))
  }

  public displayLanguage(language: ScrUserLanguage = new ScrUserLanguage()): string {
    if(!!language) {
      return language.name;
    } else {
      return null;
    }
  }

  public selectedLanguage(event: MatAutocompleteSelectedEvent) {
    this.language = event.option.value;
  }

  public submit() {
    if(!!this.language) {
      this.dialogRef.close(this.language);
    }
  }
}
