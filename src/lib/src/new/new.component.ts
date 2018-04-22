import {Component, OnInit} from '@angular/core';
import {SCR_USER_TYPES, ScrUser, ScrUserType} from '../core/user.model';
import {Router} from '@angular/router';
import {ScrUserService} from '../core/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: '',
  template: `
    <div class="new">
      <div class="header">
      <span class="mat-display-1 scr-primary-text">
        Create a new account
      </span>
      </div>

      <span class="error">{{errorMessage}}</span>

      <div class="form">
        <div class="step">
          <scr-user-new-type (typeChange)="changeRole($event)">
          </scr-user-new-type>
        </div>
        <div class="step">
          <div fxLayout="column"
               fxLayoutGap="24px">
            <div fxFlex="">
        <span class="mat-headline">
          Personal information
        </span>
              <div fxLayout="row"
                   fxLayout.xs="column"
                   fxLayoutGap="24px"
                   fxLayoutGap.xs="8px">
                <div fxFlex="">
                  <mat-form-field>
                    <input matInput=""
                           [(ngModel)]="user.forename"
                           [formControl]="forenameFormControl"
                           placeholder="Name"/>
                    <mat-error *ngIf="forenameFormControl.hasError('required')">
                      Name is <strong>required</strong>
                    </mat-error>
                  </mat-form-field>
                </div>
                <div fxFlex="">
                  <mat-form-field>
                    <input matInput=""
                           [(ngModel)]="user.lastname"
                           [formControl]="lastnameFormControl"
                           placeholder="Lastname"/>
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
                <input matInput=""
                       [(ngModel)]="user.mail"
                       [formControl]="mailFormControl"
                       placeholder="E-Mail"
                       type="email"/>
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
            <div fxFlex=""
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
      <div fxLayout="row"
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
                  [disabled]="!acceptedTerms"
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

    mat-form-field, input {
      width: 100%;
    }

    .error {
      color: #F44336;
    }
  `]
})
export class ScrUserNewComponent implements OnInit {

  public user: ScrUser = new ScrUser();

  public errorMessage: string;

  public acceptedTerms: boolean = false;
  public acceptedTermsError: boolean = false;

  public forenameFormControl = new FormControl('', [Validators.required]);
  public lastnameFormControl = new FormControl('', [Validators.required]);
  public mailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private userService: ScrUserService
  ) {
  }

  ngOnInit(): void {
    this.changeRole(SCR_USER_TYPES[0])
  }

  public cancel() {
    this.router.navigate(['/login']);
  }

  public save() {
    console.log('save()');
    this.userService.create(this.user)
      .then((user: ScrUser) => {
        const routeTo = this.navigationBasedOnRole(user.uid, user.roles);
        console.log(routeTo)
        this.router.navigate(routeTo);
      })
      .catch(error => this.handleError(error))
  }

  public changeRole(type: ScrUserType) {
    this.user.roles = [];
    this.user.roles.push(type.name);
  }

  private isValid(): boolean {
    return this.user.isValid() && !!this.user.password;
  }

  private handleError(errorObj: any) {
    if (errorObj && errorObj.error) {
      this.errorMessage = errorObj.error.message;
    }
  }

  /**
   * Redirect to edit, if role 'journal'
   *
   * @param id
   * @param roles
   * @returns
   */
  private navigationBasedOnRole(id: string, roles: string[]): string[] {

    let path = ['/user', id, 'info'];

    if (!!roles) {
      if (roles.indexOf('journal') !== -1) {
        path = ['/user', id, 'edit'];
      }
      if (roles.indexOf('investor') !== -1) {
        path = ['/user', id, 'wallet'];
      }
    }

    return path;
  }
}
