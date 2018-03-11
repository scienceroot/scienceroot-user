import {Component, Input} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-details-info-languages',
  template: `
    <div>
      <div class="mat-headline">
        <span>
          Languages
        </span>
      </div>
      <div *ngIf="user?.languages?.length > 0; else noLanguages">
        <mat-chip-list [ngClass.xs]="'mat-chip-list-stacked'">
          <mat-chip *ngFor="let language of user.languages"
                    [selected]="true"
                    color="primary">
            <span>
              {{ language.name }}
            </span>
          </mat-chip>
        </mat-chip-list>
      </div>

      <ng-template #noLanguages>
      <span class="mat-body-1">
        No languages added yet.
      </span>
      </ng-template>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserDetailsInfoLanguageComponent {

  @Input() user: ScrUser;
}
