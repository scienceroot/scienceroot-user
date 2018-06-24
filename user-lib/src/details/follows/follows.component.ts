import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrUserFollowerService} from '../../core/follower/follower.service';
import {ScrUser} from '../../core/user.model';

@Component({
  selector: '',
  template: `
    <scr-user-profile [user]="user">
      <div class="mat-headline">
        Follows
      </div>
      <scr-loading [waitFor]="followsReq">
        <div onFinish>
          <ng-container *ngIf="!!follows">
            <ng-container *ngIf="follows.length > 0; then list else empty;">
            </ng-container>
          </ng-container>
        </div>
      </scr-loading>
    </scr-user-profile>

    <ng-template #empty>
      <div class="mat-body-1">
        <span>This user currently follows nobody.</span>
      </div>
    </ng-template>

    <ng-template #list>
      <div fxLayout="column" 
           fxLayoutGap="16px">
        <ng-container *ngFor="let user of (followsReq | async)">
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
export class ScrUserDetailsFollowsComponent {

  public user: ScrUser;

  public followsReq: Promise<ScrUser[]>;
  public follows: ScrUser[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _followService: ScrUserFollowerService
  ) {
    this._activatedRoute.data
      .subscribe((data: any) => this._onRouteDataChange(data));
  }

  private _onRouteDataChange(data: any) {
    this.user = data.user;
    this._fetchFollowedUsers(this.user.uid);
  }

  private _fetchFollowedUsers(userId: string) {
    this.followsReq = this._followService.follows(userId);
    this.followsReq.then(follows => this.follows = follows);
  }
}
