import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-details-info-interests',
  template: `
    <div>
      <div class="mat-headline jobs--headline">
        <mat-icon>
          favorite
        </mat-icon>
        <span>
          Fields of Interest
        </span>
      </div>
      <div>
        <mat-chip-list [ngClass.xs]="'mat-chip-list-stacked'">
          <mat-chip *ngFor="let interest of user.interests"
                    [selected]="true"
                    color="accent">
            <span>
              {{ interest.displayName }}
            </span>
          </mat-chip>
        </mat-chip-list>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserDetailsInfoInterestsComponent {

  @Input() user: ScrUser;
}
