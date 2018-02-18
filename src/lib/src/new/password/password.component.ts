import {Component, EventEmitter, Output} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {Subject} from "rxjs/Subject";

import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'scr-user-new-password',
  template: `
    <div  fxLayout="row"
          fxLayout.xs="column"
          fxLayoutGap="24px"
          fxLayoutGap.xs="8px">
      <div fxFlex="">
        <mat-form-field>
          <input  matInput=""
                  type="password"
                  [(ngModel)]="password"
                  [formControl]="passwordFormControl"
                  placeholder="Password" />
          <mat-error *ngIf="passwordFormControl.hasError('required')">
            Password is <strong>required</strong>
          </mat-error>
          <mat-error *ngIf="passwordFormControl.hasError('min')">
            Password to <strong>short</strong>.
          </mat-error>
        </mat-form-field>
      </div>
      <div fxFlex="">
        <mat-form-field>
          <input  matInput=""
                  type="password"
                  [ngModel]="passwordConfirmation"
                  (ngModelChange)="passwordConfirmationChange.next($event)"
                  [formControl]="passwordConfirmationFormControl"
                  placeholder="Password confirmation" />
          <mat-error *ngIf="passwordConfirmationFormControl.hasError('required')">
            Password confirmation is <strong>required</strong>
          </mat-error>
          <mat-error *ngIf="passwordConfirmationMismatchError">
            Passwords not equal
          </mat-error>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field, input { width: 100%; }
  `]
})
export class ScrUserNewPasswordComponent {

  @Output() passwordChange: EventEmitter<string> = new EventEmitter();

  public readonly passwordConfirmationChange: Subject<string> = new Subject();

  public password: string;
  public passwordConfirmation: string;
  public passwordConfirmationMismatchError: boolean = false;
  public passwordFormControl = new FormControl(
    '',
    [Validators.required, Validators.min(6)]
  );
  public passwordConfirmationFormControl = new FormControl(
    '',
    [Validators.required ]
  );

  constructor() {
    this.passwordConfirmationChange
      .asObservable()
      .debounceTime(300)
      .subscribe((newPassword: string) => {
        this.passwordConfirmation = newPassword;

        if(this.passwordConfirmation !== this.password) {
          this.passwordConfirmationMismatchError = true;
        } else {
          this.passwordChange.emit(this.password);
        }
      });
  }
}
