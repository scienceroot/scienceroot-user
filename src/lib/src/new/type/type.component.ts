import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {SCR_USER_TYPES, ScrUserType} from "../../core/user.model";
import {MatCheckboxChange} from "@angular/material";

@Component({
  selector: 'scr-user-new-type',
  template: `
    <div  fxLayout="column"
          fxLayoutGap="24px">
     <div *ngFor="let type of userTypes"
          fxFlex="">
       <mat-checkbox  [value]="type"
                      [checked]="activeType && (type.name === activeType.name)"
                      (change)="onTypeChange($event, type)">
         <scr-user-new-type-label [type]="type">
         </scr-user-new-type-label>
       </mat-checkbox>
     </div> 
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserNewTypeComponent implements OnInit {

  public readonly userTypes: ScrUserType[] = SCR_USER_TYPES;

  public activeType: ScrUserType = this.userTypes[0];

  @Output() typeChange: EventEmitter<ScrUserType> = new EventEmitter();

  ngOnInit(): void {
    this.typeChange.emit(this.activeType);
  }

  public onTypeChange(event: MatCheckboxChange, type: ScrUserType) {
    if(event.checked) {
      this.activeType = type;
    } else {
      this.activeType = null;
    }

    this.typeChange.emit(this.activeType);
  }
}
