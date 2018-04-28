import {Component, Input, OnInit} from '@angular/core';
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
          <span class="mat-body-2">{{ contact.skype }}</span>
        </div>
      </div>
      <div fxLayout="row">
        <div fxFlex="64px">
          <span class="mat-caption">Phone</span>
        </div>
        <div fxFlex="">
          <span class="mat-body-2">{{ contact.phone }}</span>
        </div>
      </div>
      <ng-container *ngIf="!!contact.twitter">
        <div fxLayout="row">
          <div fxFlex="64px">
            <span class="mat-caption">Twitter</span>
          </div>
          <div fxFlex="">
            <a  class="mat-body-2"
                [href]="twitterLink"
                target="_blank"
                rel="noopener">
              <span>{{ contact.twitter }}</span>
            </a>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrUserContactComponent implements OnInit {

  @Input() contact: ScrUserContact;

  public twitterLink: string;

  ngOnInit(): void {
    if (!!this.contact) {
      this.twitterLink = 'https://twitter.com/' + this.contact.twitter
    }
  }
}
