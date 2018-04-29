import {Component, Input, OnInit} from "@angular/core";
import {ScrUser} from "../../../core/user.model";

@Component({
  selector: 'scr-user-profile-menu',
  template: `
    <nav mat-tab-nav-bar>
      <a mat-tab-link
         *ngFor="let link of links"
         [routerLink]="link.path"
         routerLinkActive 
         #rla="routerLinkActive"
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
        path: ['/user', this.user.uid, 'info']
      },
      {
        displayName: 'Follows',
        path: ['/user', this.user.uid, 'followedBy']
      },
      {
        displayName: 'Followers',
        path: ['/user', this.user.uid, 'followers']
      },
      {
        displayName: 'Wallet',
        path: ['/user', this.user.uid, 'wallet']
      }
    ]
  }
}

export interface ScrUserProfileMenuLink {
  displayName: string;
  path: string[];
}
