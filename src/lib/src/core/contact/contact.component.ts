import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
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
          <a  class="mat-body-2"
              [href]="skypeLink">
            <span>{{ contact.skype }}</span>
          </a>
        </div>
      </div>
      <div fxLayout="row">
        <div fxFlex="64px">
          <span class="mat-caption">Phone</span>
        </div>
        <div fxFlex="">
          <a  class="mat-body-2"
              [href]="phoneLink">
            {{ contact.phone }}
          </a>
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
  public phoneLink: string;
  public skypeLink: SafeUrl;

  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (!!this.contact) {
      this.skypeLink = this._sanitizer.bypassSecurityTrustUrl('skype:' + this.contact.skype);
      this.twitterLink = 'https://twitter.com/' + this.contact.twitter;
      this.phoneLink = 'tel:' + this.contact.phone;
    }
  }
}
