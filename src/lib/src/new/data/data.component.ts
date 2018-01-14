import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'scr-user-new-data',
  template: `
    <div  fxLayout="column"
          fxLayoutGap="24px">
      <div fxFlex="">
        <span class="mat-headline">
          Personal information
        </span>
        <div  fxLayout="row"
              fxLayout.xs="column"
              fxLayoutGap="24px"
              fxLayoutGap.xs="8px">
          <div fxFlex="">
            <mat-form-field>
              <input  matInput=""
                      [formControl]="forenameFormControl"
                      placeholder="Forename" />
              <mat-error *ngIf="forenameFormControl.hasError('required')">
                Name is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
          <div fxFlex="">
            <mat-form-field >
              <input  matInput=""
                      [formControl]="lastnameFormControl"
                      placeholder="Lastname" />
              <mat-error *ngIf="lastnameFormControl.hasError('required')">
                Name is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div fxFlex="">
        <mat-form-field>
          <input  matInput=""
                  [formControl]="mailFormControl"
                  placeholder="E-Mail"
                  type="email" />
          <mat-error *ngIf="mailFormControl.hasError('required')">
            E-Mail is <strong>required</strong>
          </mat-error>
          <mat-error *ngIf="mailFormControl.hasError('email')">
            E-Mail is <strong>invalid</strong>
          </mat-error>
        </mat-form-field>
      </div>
      <div fxFlex="">
        <span class="mat-headline">
          Credentials
        </span>
        <div>
          <mat-form-field>
            <input  matInput=""
                    [formControl]="usernameFormControl"
                    placeholder="Username" />
            <mat-error *ngIf="usernameFormControl.hasError('required')">
              Username is <strong>required</strong>
            </mat-error>
          </mat-form-field>
        </div>
        <div  fxLayout="row"
              fxLayout.xs="column"
              fxLayoutGap="24px"
              fxLayoutGap.xs="8px">
          <div fxFlex="">
            <mat-form-field>
              <input  matInput=""
                      type="password"
                      [formControl]="passwordFormControl"
                      placeholder="Password" />
              <mat-error *ngIf="passwordFormControl.hasError('required')">
                Password is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
          <div fxFlex="">
            <mat-form-field>
              <input  matInput=""
                      [formControl]="passwordConfirmationFormControl"
                      type="password"
                      placeholder="Password confirmation" />
              <mat-error *ngIf="passwordConfirmationFormControl.hasError('required')">
                Password confirmation is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div  fxFlex=""
            class="accept-conditions">
        <mat-checkbox>
          <span class="mat-body-2">
            I agree to the <a href="" target="_blank">Terms and Conditions</a>
          </span>
        </mat-checkbox>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, input { width: 100%; }
    
    .accept-conditions mat-checkbox {
      margin-right: 16px;
    }
  `]
})
export class ScrUserNewDataComponent {

  public forenameFormControl = new FormControl('',[ Validators.required ]);
  public lastnameFormControl = new FormControl('',[ Validators.required ]);

  public mailFormControl = new FormControl('',[ Validators.required, Validators.email ]);

  public usernameFormControl = new FormControl('',[ Validators.required ]);
  public passwordFormControl = new FormControl('',[ Validators.required ]);
  public passwordConfirmationFormControl = new FormControl('',[ Validators.required ]);
}
