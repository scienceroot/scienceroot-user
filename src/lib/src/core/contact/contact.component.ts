import {Component, Input} from '@angular/core';
import {ScrUserContact} from './contact.model';

@Component({
  selector: 'scr-user-contact',
  template: `
    <div>
      <div fxLayout="row">
        <div fxFlex="64px">
          <span class="mat-caption">Skype</span>
        </div>
        <div fxFlex="">
          <span class="mat-body-1">{{ contact.skype }}</span>
        </div>
      </div>
      <div fxLayout="row">
        <div fxFlex="64px">
          <span class="mat-caption">Phone</span>
        </div>
        <div fxFlex="">
          <span class="mat-body-1">{{ contact.phone }}</span>
        </div>
      </div>
      <div fxLayout="row">
        <div fxFlex="64px">
          <span class="mat-caption">Twitter</span>
        </div>
        <div fxFlex="">
          <span class="mat-body-1">{{ contact.twitter }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserContactComponent {

  @Input() contact: ScrUserContact;
}
