import {Component, Input} from '@angular/core';
import {ScrUserContact} from '../../core/contact/contact.model';
import {ScrUserContactService} from '../../core/contact/contact.service';

@Component({
  selector: 'scr-user-contact-edit',
  template: `
    <div *ngIf="contact">
      <div>
        <span class="mat-headline">Contact</span>
      </div>
      <div>
        <mat-form-field>
          <input  matInput="" 
                  (change)="edited()"
                  [(ngModel)]="contact.skype"
                  placeholder="Skype Username" />
        </mat-form-field>
      </div>
      <div>
        <mat-form-field>
          <input  matInput=""
                  [(ngModel)]="contact.phone"
                  (change)="edited()"
                  type="tel"
                  placeholder="Phone number" />
        </mat-form-field>
      </div>
      <div>
        <mat-form-field>
          <input  matInput=""
                  [(ngModel)]="contact.twitter"
                  (change)="edited()"
                  placeholder="Twitter Username" />
        </mat-form-field>
      </div>
      <div  fxLayout="row"
            fxLayoutAlign="end"
            class="actions">
        <div fxFlex="75px">
          <button mat-raised-button=""
                  color="accent"
                  [disabled]="!isEdited"
                  (click)="save()">
            Save
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    mat-form-field { width: 100%; }
  `]
})
export class ScrUserContactEditComponent {

  @Input() userId: string;
  @Input() contact: ScrUserContact;

  public isEdited: boolean;

  constructor(private _contactService: ScrUserContactService) {
  }

  public save() {
    this._contactService.update(this.userId, this.contact)
      .then(() => this.isEdited = false);
  }

  public edited() {
    if(!this.isEdited) {
      this.isEdited = true;
    }
  }
}
