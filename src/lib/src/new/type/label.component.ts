import {Component, Input} from "@angular/core";
import {ScrUserType} from "../../core/user.model";

@Component({
  selector: 'scr-user-new-type-label',
  template: `
    <div class="label">
      <div fxLayout="column">
        <div  fxFlex=""
              class="label--title">
          <span class="mat-title">
             {{ type.displayName }}
           </span>
        </div>
        <div fxFlex=""
             class="mat-body">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .label { 
      padding: 8px 24px;
    }
  
    .label .label--title mat-icon {
      margin: auto 0;
    }
  `]
})
export class ScrUserNewTypeLabelComponent {

  @Input() type: ScrUserType;
}
