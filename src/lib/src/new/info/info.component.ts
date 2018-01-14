import {Component} from "@angular/core";
import {SCR_USER_INDUSTRIES, ScrUserIndustry} from "../../core/industry.model";
import {SCR_USER_JOB_TITLES, ScrUserJobTitle} from "../../core/job-title.model";

@Component({
  selector: 'scr-user-new-info',
  template: `
    <div  fxLayout="column"
          fxLayoutGap="24px">
      <div fxFlex="">
        <mat-form-field>
          <input  matInput="" 
                  placeholder="Employer" />
        </mat-form-field>
      </div>
      <div fxFlex="">
        <mat-form-field>
          <mat-select placeholder="Industry">
            <mat-option *ngFor="let industry of industries"
                        [value]="industry">
              {{ industry.displayName }}
            </mat-option>
          </mat-select>
        </mat-form-field>  
      </div>
      <div fxFlex="">
        <mat-form-field>
          <mat-select placeholder="Job Title">
            <mat-option *ngFor="let title of jobTitles"
                        [value]="title">
              {{ title.displayName }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, input { width: 100%; }
  `]
})
export class ScrUserNewInfoComponent {

  public industries: ScrUserIndustry[] = SCR_USER_INDUSTRIES;
  public jobTitles: ScrUserJobTitle[] = SCR_USER_JOB_TITLES;
}
