import {HttpErrorResponse} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {ScrActiveUserService} from '../../active/active-user.service';
import {ScrUser} from '../user.model';
import {ScrUserFollowerService} from './follower.service';

@Component({
  selector: 'scr-user-follow-button',
  template: `
    <ng-container *ngIf="!!userId && !!activeUserId && activeUserId !== userId">
      <button mat-raised-button=""
              color="accent"
              (click)="onBtnClick()">
        <ng-container *ngIf="isFollowing">
          <span>Unfollow</span>
        </ng-container>
        <ng-container *ngIf="!isFollowing">
          <span>Follow</span>
        </ng-container>
      </button>
    </ng-container>
  `,
  styles: [`
  
  `]
})
export class ScrUserFollowButtonComponent implements OnInit {

  /**
   * The userId in which context the button is shown.
   */
  @Input() userId: string;

  /**
   * Currently logged in user.
   */
  public activeUserId: string;

  public isFollowingReq: Promise<ScrUser>;
  public isFollowing: boolean;

  constructor(
    private _activeUserService: ScrActiveUserService,
    private _followService: ScrUserFollowerService
  ) {
    const activeUser = this._activeUserService.get();
    this.activeUserId = !!activeUser ? activeUser.uid : null;
  }

  ngOnInit(): void {
    if (this.activeUserId !== this.userId) {
      this.isFollowingReq = this._followService.isFollowing(this.activeUserId, this.userId);
      this.isFollowingReq
        .then(() => this.isFollowing = true)
        .catch((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.isFollowing = false;
          }
        });
    }
  }

  public onBtnClick() {
    if (this.isFollowing) {
      this._followService.unfollow(this.activeUserId, this.userId)
        .then(() => this.isFollowing = false);
    } else {
      this._followService.follow(this.activeUserId, this.userId)
        .then(() => this.isFollowing = true);
    }
  }
}
