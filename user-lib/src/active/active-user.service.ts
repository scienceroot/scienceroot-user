import {Injectable} from '@angular/core';
import {ScrUser} from '../core/user.model';
import {Subject} from 'rxjs/Subject';
import {ScrAuthenticationLoginService} from '@scienceroot/security';
import {ScrUserStore} from '../store/user.store';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ScrActiveUserService {

  public activeUserChanged: Subject<ScrUser> = new Subject();

  private readonly storageKey: string = 'src.user.active';

  constructor(
    private httpClient: HttpClient,
    private loginService: ScrAuthenticationLoginService,
    private router: Router
  ) {
    this.loginService.loginStateChanged
      .subscribe((state: boolean) => {
        if (state) {
          this.resolveActiveUser()
            .then((user: ScrUser) => this.set(user));
        }
      });
  }

  public set(user: ScrUser) {
    const userStr: string = JSON.stringify(user);

    sessionStorage.setItem(this.storageKey, userStr);

    this.activeUserChanged.next(user);
  }

  public get(): ScrUser | null {
    let user: ScrUser = null;
    const userStr: string = sessionStorage.getItem(this.storageKey);

    if (!!userStr) {
      try {
        const userObj: any = JSON.parse(userStr);

        user = ScrUser.fromObj(userObj);

        return user;
      } catch (error) {
        // stored user is somehow corrupted
        sessionStorage.removeItem(this.storageKey);
        console.error(error);

        return null;
      } 
    }

    return user;
  }

  private resolveActiveUser(): Promise<ScrUser> {
    const url: string = ScrUserStore.getMe();

    return this.httpClient.get(url)
      .map(res => ScrUser.fromObj(res))
      .toPromise()
      .catch((error: Error) => {
        console.error(error);
        localStorage.clear();
        this.router.navigate(['/login']);

        return null;
      });
  }
}
