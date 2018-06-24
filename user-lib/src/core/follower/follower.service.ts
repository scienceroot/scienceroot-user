import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ScrUserStore} from '../../store/user.store';
import {ScrUser} from '../user.model';

@Injectable()
export class ScrUserFollowerService {

  constructor(private _httpClient: HttpClient) {

  }

  public follow(userId: string, toFollowUserId: string): Promise<ScrUser> {
    const url: string = ScrUserStore.follow(userId, toFollowUserId);

    return this._httpClient.post(url, null)
      .map(ScrUser.fromObj)
      .toPromise();
  }

  public unfollow(userId: string, toUnfollowUserId: string): Promise<ScrUser> {
    const url: string = ScrUserStore.unfollow(userId, toUnfollowUserId);

    return this._httpClient.delete(url)
      .map(ScrUser.fromObj)
      .toPromise();
  }

  public isFollowing(userId: string, isFollowingUserId: string): Promise<ScrUser> {
    const url: string = ScrUserStore.isFollowing(userId, isFollowingUserId);

    return this._httpClient.get(url)
      .map(ScrUser.fromObj)
      .toPromise();
  }

  public isFollowedBy(userId: string): Promise<ScrUser[]> {
    const url: string = ScrUserStore.followedBy(userId);

    return this._httpClient.get(url)
      .pipe(
        map((fellowships: ScrUserFellowship[]) => fellowships.map(fellowship => fellowship.follower)),
        map(ScrUser.fromObjArr)
      )
      .toPromise();
  }

  public follows(userId: string): Promise<ScrUser[]> {
    const url: string = ScrUserStore.follows(userId);

    return this._httpClient.get<ScrUserFellowship[]>(url)
      .pipe(
        map((fellowships: ScrUserFellowship[]) => fellowships.map(fellowship => fellowship.followed)),
        map(ScrUser.fromObjArr)
      )
      .toPromise();
  }
}

export interface ScrUserFellowship {
  id: string;
  follower: ScrUser;
  followed: ScrUser;
}
