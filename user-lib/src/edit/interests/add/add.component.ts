import {Component} from "@angular/core";
import "rxjs/add/operator/debounceTime";
import {MatAutocompleteSelectedEvent, MatDialogRef} from "@angular/material";
import {ScrUserFieldOfInterest} from "../../../core/interest/interest.model";
import {ScrUserFieldOfInterestService} from "../../../core/interest/interest.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: '',
  template: `
    <div>
      <div class="header">
        <span class="mat-headline">Add a interest</span>
      </div>
      <div>
        <mat-form-field>
          <input type="text" placeholder="Interest" 
                 aria-label="Interest" 
                 matInput
                 [formControl]="interestCtrl"
                 [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete"
                            [displayWith]="displayInterest"
                            (optionSelected)="selectedInterest($event)">
            <mat-option *ngFor="let option of interestOptions | async" 
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
export class ScrUserEditInterestsAddComponent {

  public interest: ScrUserFieldOfInterest;
  public interestCtrl: FormControl = new FormControl();
  public interestOptions: Promise<ScrUserFieldOfInterest[]>;

  constructor(
    private interestService: ScrUserFieldOfInterestService,
    public dialogRef: MatDialogRef<ScrUserEditInterestsAddComponent>
  ) {
    this.interestCtrl.valueChanges
      .debounceTime(200)
      .subscribe(query => this.interestOptions = this.interestService.get(query))
  }

  public displayInterest(interest: ScrUserFieldOfInterest = new ScrUserFieldOfInterest()): string {
    if(!!interest) {
      return interest.name;
    } else {
      return null;
    }
  }

  public selectedInterest(event: MatAutocompleteSelectedEvent) {
    this.interest = event.option.value;
  }

  public submit() {
    if(!!this.interest) {
      this.dialogRef.close(this.interest);
    }
  }
}
