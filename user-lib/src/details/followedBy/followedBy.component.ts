import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrUserFollowerService} from '../../core/follower/follower.service';
import {ScrUser} from '../../core/user.model';

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div class="mat-headline">
        Followers
      </div>
      <scr-loading [waitFor]="followedByReq">
        <div onFinish>
          <ng-container *ngIf="!!followedBy">
            <ng-container *ngIf="followedBy.length > 0; then list else empty;">
            </ng-container>
          </ng-container>
        </div>
      </scr-loading>
    </scr-user-profile>

    <ng-template #empty>
      <div class="mat-body-1">
        <span>Currently nobody follows this user.</span>
      </div>
    </ng-template>

    <ng-template #list>
      <div fxLayout="column"
           fxLayoutGap="16px">
        <ng-container *ngFor="let user of (followedByReq | async)">
          <div fxFlex="">
            <div fxLayout="row">
              <div fxFlex="">
                <span>{{user.forename}} {{user.lastname}}</span>
              </div>
              <div fxFlex="75px">
                <a  mat-raised-button=""
                    color="accent"
                    [routerLink]="['/user', user.uid]">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ScrUserDetailsFollowedByComponent {

  public user: ScrUser;

  public followedByReq: Promise<ScrUser[]>;
  public followedBy: ScrUser[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _followService: ScrUserFollowerService
  ) {
    this._activatedRoute.data
      .subscribe((data: any) => this._onRouteDataChange(data));
  }

  private _onRouteDataChange(data: any) {
    this.user = data.user;
    this._fetchFollowedByUsers(this.user.uid);
  }

  private _fetchFollowedByUsers(userId: string) {
    this.followedByReq = this._followService.isFollowedBy(userId);
    this.followedByReq.then(follows => this.followedBy = follows);
  }
}
