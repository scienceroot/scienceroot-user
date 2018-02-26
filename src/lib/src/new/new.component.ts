import {Component} from "@angular/core";
import {ScrUser, ScrUserType} from "../core/user.model";
import {Router} from "@angular/router";
import {ScrUserService} from "../core/user.service";
import {FormControl, Validators} from "@angular/forms";

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
        <div  class="step">
          <scr-user-new-type (typeChange)="changeRole($event)">
          </scr-user-new-type>
        </div>
        <div class="step">
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
                            [(ngModel)]="user.forename"
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
                            [(ngModel)]="user.lastname"
                            [formControl]="lastnameFormControl"
                            placeholder="Lastname" />
                    <mat-error *ngIf="lastnameFormControl.hasError('required')">
                      Name is <strong>required</strong>
                    </mat-error>
                  </mat-form-field>
                </div>
              </div>
            </div>
            <span class="mat-headline">
              Credentials
            </span>
            <div fxFlex="">
              <mat-form-field>
                <input  matInput=""
                        [(ngModel)]="user.mail"
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
            <div>
              <scr-user-new-password (passwordChange)="user.password = $event">
              </scr-user-new-password>
            </div>
            <div  fxFlex=""
                  class="accept-conditions">
              <scr-user-new-terms (checkedChange)="acceptedTerms = $event">
              </scr-user-new-terms>
              <mat-error *ngIf="acceptedTermsError">
                You need to agree to our Terms and Conditions
              </mat-error>
            </div>
          </div>
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
                  (click)="save()">
            Register
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
      margin: 32px 0;
    }

    mat-form-field, input { width: 100%; }
  `]
})
export class ScrUserNewComponent {

  public user: ScrUser = new ScrUser();

  public acceptedTerms: boolean = false;
  public acceptedTermsError: boolean = false;

  public forenameFormControl = new FormControl('',[ Validators.required ]);
  public lastnameFormControl = new FormControl('',[ Validators.required ]);
  public mailFormControl = new FormControl('',[ Validators.required, Validators.email ]);

  constructor(
    private router: Router,
    private userService: ScrUserService
  ) {
    //this.user.roles.push(SCR_USER_TYPES[0].name)
  }

  public cancel() {
    this.router.navigate(['/']);
  }

  public save() {
    if(!!this.acceptedTerms) {
      this.userService.create(this.user)
        .then((user: ScrUser) => {
          this.router.navigate(['/user', user.uid, 'info'])
        });
    } else {
      this.acceptedTermsError = true;
    }
  }

  public changeRole(type: ScrUserType) {
    this.user.roles = [];
    this.user.roles.push(type.name);
  }

  private isValid(): boolean {
    return this.user.isValid() && !!this.user.password;
  }
}
