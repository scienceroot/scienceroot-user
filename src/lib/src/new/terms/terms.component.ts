import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'scr-user-new-terms',
  template: `
    <mat-checkbox (change)="checkedChange.emit($event.checked)">
          <span class="mat-body-2">
            I agree to the
          </span>
          <a [routerLink]="['/user', 'terms']"
             target="_blank"
             class="mat-body-2">
            Terms and Conditions
          </a>
    </mat-checkbox>
  `,
  styles: [`    
  `]
})
export class ScrUserNewTermsComponent {

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter();

}
