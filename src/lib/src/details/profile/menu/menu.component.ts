import {Component, Input, OnInit} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-profile-menu',
  template: `
    <nav mat-tab-nav-bar>
      <a mat-tab-link
         *ngFor="let link of links"
         [routerLink]="link.path"
         routerLinkActive #rla="routerLinkActive"
         [active]="rla.isActive">
        {{link.displayName}}
      </a>
    </nav>
  `,
  styles: [`
  
  `]
})
export class ScrUserProfileMenuComponent implements OnInit {

  @Input() user: ScrUser;

  public links: ScrUserProfileMenuLink[];

  ngOnInit(): void {
    this.links = [
      {
        displayName: 'Information',
        path: ['user', this.user.id, 'info']
      }, {
        displayName: 'Activities',
        path: ['user', this.user.id, 'activities']
      }, {
        displayName: 'Jobs',
        path: ['user', this.user.id, 'jobs']
      }
    ]
  }
}

export interface ScrUserProfileMenuLink {
  displayName: string;
  path: string[];
}
