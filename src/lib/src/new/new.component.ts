import {Component} from "@angular/core";
import {ScrUser, ScrUserType} from "../core/user.model";
import {Router} from "@angular/router";

@Component({
  selector: '',
  template: `
    <div class="new">
      <div class="header">
      <span class="mat-display-1 scr-primary-text">
        Create a new account
      </span>
      </div>
      <div class="form">
        <div  class="step"
              *ngIf="activeStep === steps.TYPE">
          <scr-user-new-type (typeChange)="onTypeSelect($event)">
          </scr-user-new-type>
        </div>
        <div class="step"
             *ngIf="activeStep === steps.USER_DATA">
          <scr-user-new-data>
          </scr-user-new-data>
        </div>
        <div  class="step"
              *ngIf="activeStep === steps.INFORMATION">
          <scr-user-new-info>
          </scr-user-new-info>
        </div>
      </div>
      <div  fxLayout="row"
            fxLayoutAlign="end center">
        <div fxFlex="100px">
          <button mat-button=""
                  (click)="cancel()">
            Cancel
          </button>
        </div>
        <div fxFlex="100px">
          <button mat-raised-button=""
                  color="accent"
                  (click)="nextStep(activeStep)">
            Next
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .new {
      max-width: 700px;
      margin: auto;
    }

    .new .header {
      margin-bottom: 24px;
    }
    
    .new .form {
      margin: 24px 0;
    }
    
    .step {
      min-height: 300px;
    }
  `]
})
export class ScrUserNewComponent {

  public steps = ScrUserNewStep;
  public activeStep: ScrUserNewStep = ScrUserNewStep.TYPE;

  public user: ScrUser = new ScrUser();

  constructor(private router: Router) {
  }

  public onTypeSelect(selected: ScrUserType) {
    this.user.type = selected;
  }

  public cancel() {
    this.router.navigate(['/']);
  }

  public nextStep(currentStep: ScrUserNewStep) {
    switch (currentStep) {
      case ScrUserNewStep.TYPE:
        console.log(this.user)
        if(!!this.user.type) {
          this.activeStep = ScrUserNewStep.USER_DATA;
        }
        break;
      case ScrUserNewStep.USER_DATA:
        this.activeStep = ScrUserNewStep.INFORMATION;
        break;
      case ScrUserNewStep.INFORMATION:
        break;
    }
  }
}

export enum ScrUserNewStep {
  TYPE = 'TYPE',
  USER_DATA = 'USER_DATA',
  INFORMATION = 'INFORMATION'
}
