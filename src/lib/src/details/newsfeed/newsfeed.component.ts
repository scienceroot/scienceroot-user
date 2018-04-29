import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrActiveUserService} from '../../active/active-user.service';
import {ScrUser} from '../../core/user.model';

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <scr-feed-user  [userId]="user.uid"
                      [activeUser]="activeUser">
      </scr-feed-user>
    </scr-user-profile>
  `,
  styles: [`
  
  `]
})
export class ScrUserDetailsNewsfeedComponent {

  public user: ScrUser;
  public activeUser: ScrUser;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _activeUserService: ScrActiveUserService
  ) {
    this.activeUser = this._activeUserService.get();
    this._activatedRoute.data.subscribe((data: any) => {
      this.user = data.user;
    });
  }
}
