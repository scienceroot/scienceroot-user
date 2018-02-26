import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-details-info-interests',
  template: `
    <div>
      <div class="mat-headline jobs--headline">
        <span>
          Fields of Interest
        </span>
      </div>
      <div *ngIf="user?.interests?.length > 0; else noInterests">
        <mat-chip-list [ngClass.xs]="'mat-chip-list-stacked'">
          <mat-chip *ngFor="let interest of user.interests"
                    [selected]="true"
                    color="primary">
            <span>
              {{ interest.name }}
            </span>
          </mat-chip>
        </mat-chip-list>
      </div>

      <ng-template #noInterests>
      <span class="mat-body-1">
        No interests added yet.
      </span>
      </ng-template>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserDetailsInfoInterestsComponent {

  @Input() user: ScrUser;
}
