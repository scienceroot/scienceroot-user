import {Component} from "@angular/core";
import {ScrUserJob} from "../../../core/job/job.model";
import {ScrUserIndustry} from "../../../core/industry/industry.model";
import "rxjs/add/operator/debounceTime";
import {ScrIndustryService} from "../../../core/industry/industry.service";
import {MatAutocompleteSelectedEvent, MatDialogRef} from "@angular/material";
import {FormControl} from "@angular/forms";

@Component({
  selector: '',
  template: `
    <div>
      <div class="header">
        <span class="mat-headline">Add a job</span>
      </div>
      <span class="mat-title">Info</span>
      <div  fxLayout="row"
            fxLayoutGap="24px">
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    [(ngModel)]="newJob.title"
                    placeholder="Job Title"/>
          </mat-form-field>
        </div>
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    [(ngModel)]="newJob.employer"
                    placeholder="Employer"/>
          </mat-form-field>
        </div>
      </div>
      <div>
        <mat-form-field>
          <input type="search" 
                 placeholder="Industry" 
                 aria-label="Industry" 
                 matInput
                 [formControl]="industryCtr"
                 [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete"
                            [displayWith]="displayIndustry"
                            (optionSelected)="selectedIndustry($event)">
            <mat-option *ngFor="let option of industryOptions | async" 
                        [value]="option">
              {{ option.name }}
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>
      </div>
      <span class="mat-title">Timespan</span>
      <div  fxLayout="row"
            fxLayoutGap="24px">
        <div fxFlex=""
             fxFlexAlign="center">
          <span class="mat-subheading">From</span>
        </div>
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    type="number"
                    [(ngModel)]="newJob.startMonth"
                    placeholder="Month"
                    min="1"
                    max="12"/>
          </mat-form-field>
        </div>
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    type="number"
                    min="1900"
                    step="1"
                    [(ngModel)]="newJob.startYear"
                    placeholder="Year"/>
          </mat-form-field>
        </div>
      </div>
      <div  fxLayout="row"
            fxLayoutGap="24px">
        <div  fxFlex=""
              fxFlexAlign="center">
          <span class="mat-subheading">To</span>
        </div>
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    type="number"
                    [(ngModel)]="newJob.endMonth"
                    placeholder="Month"
                    min="1"
                    max="12"/>
          </mat-form-field>
        </div>
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    type="number"
                    min="1900"
                    step="1"
                    [(ngModel)]="newJob.endYear"
                    placeholder="Year"/>
          </mat-form-field>
        </div>
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
export class ScrUserEditJobsAddComponent {

  public newJob: ScrUserJob = new ScrUserJob();

  public industryCtr: FormControl = new FormControl();

  public industry: ScrUserIndustry = new ScrUserIndustry();
  public industryOptions: Promise<ScrUserIndustry[]>;

  constructor(
    private industryService: ScrIndustryService,
    public dialogRef: MatDialogRef<ScrUserEditJobsAddComponent>
  ) {
    this.industryCtr.valueChanges
      .debounceTime(200)
      .subscribe(query => this.industryOptions = this.industryService.get(query));
  }

  public displayIndustry(industry: ScrUserIndustry = new ScrUserIndustry()): string {
    if(!!industry) {
      return industry.name;
    } else {
      return null;
    }
  }

  public selectedIndustry(event: MatAutocompleteSelectedEvent) {
    this.industry = event.option.value;
  }

  public submit() {
    if(!!this.industry) {
      this.newJob.industry = this.industry;
      this.dialogRef.close(this.newJob);
    }
  }
}
