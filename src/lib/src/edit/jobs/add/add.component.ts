import {Component} from "@angular/core";
import {ScrUserJob} from "../../../core/job.model";
import {ScrUserIndustry} from "../../../core/industry/industry.model";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import {ScrIndustryService} from "../../../core/industry/industry.service";
import {MatAutocompleteSelectedEvent, MatDialogRef} from "@angular/material";

@Component({
  selector: '',
  template: `
    <div>
      <div class="header">
        <span class="mat-headline">Add a job</span>
      </div>
      <div  fxLayout="row"
            fxLayoutGap="24px">
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    placeholder="Job Title"/>
          </mat-form-field>
        </div>
        <div fxFlex="">
          <mat-form-field>
            <input  matInput=""
                    placeholder="Employer"/>
          </mat-form-field>
        </div>
      </div>
      <div>
        <mat-form-field>
          <input type="text" placeholder="Industry" 
                 aria-label="Industry" 
                 matInput
                 [ngModel]="industryName"
                 (ngModelChange)="onIndustryNameChange($event)"
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

  public industryNameChange: Subject<string> = new Subject();
  public industryName: string;
  public industry: ScrUserIndustry;
  public industryOptions: Promise<ScrUserIndustry[]>;

  constructor(
    private industryService: ScrIndustryService,
    private dialogRef: MatDialogRef<ScrUserEditJobsAddComponent>
  ) {
    this.industryNameChange.asObservable()
      .debounceTime(200)
      .subscribe(query => this.industryOptions = this.industryService.get(query));
  }

  public displayIndustry(industry: ScrUserIndustry): string {
    return industry.name;
  }

  public selectedIndustry(event: MatAutocompleteSelectedEvent) {
    this.industry = ScrUserIndustry.fromObject(event.option);
  }

  public onIndustryNameChange(newIndustryName: string) {
    this.industryName = newIndustryName;
    this.industryNameChange.next(newIndustryName);
  }

  public submit() {
    if(!this.industry && !!this.industryName) {

    }
  }
}
