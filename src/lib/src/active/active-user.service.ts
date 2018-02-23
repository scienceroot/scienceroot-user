import {Injectable} from "@angular/core";
import {ScrUser} from "../core/user.model";
import {Subject} from "rxjs/Subject";
import {ScrUserService} from "../core/user.service";
import {ScrAuthenticationLoginService} from "@scienceroot/security";
import {ScrUserStore} from "../store/user.store";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ScrActiveUserService {

  public activeUserChanged: Subject<ScrUser> = new Subject();

  private readonly storageKey: string = 'src.user.active';

  constructor(
    private httpClient: HttpClient,
    private loginService: ScrAuthenticationLoginService
  ) {
    this.loginService.loginStateChanged
      .subscribe((state: boolean) => {
        if(state) {
          this.resolveActiveUser()
            .then((user: ScrUser) => this.set(user));
        }
      });
  }

  public set(user: ScrUser) {
    let userStr: string = JSON.stringify(user);

    sessionStorage.setItem(this.storageKey, userStr);

    this.activeUserChanged.next(user);
  }

  public get(): ScrUser | null {
    let user: ScrUser = null;
    let userStr: string = sessionStorage.getItem(this.storageKey);

    if(!!userStr) {
      try {
        let userObj: any = JSON.parse(this.storageKey);

        user = ScrUser.fromObj(userObj);
      } catch(error) {
        // stored user is somehow corrupted
        sessionStorage.removeItem(this.storageKey);
      } finally {
        return user;
      }
    }

    return user;
  }

  private resolveActiveUser(): Promise<ScrUser> {
    let url: string = ScrUserStore.getMe();

    return this.httpClient.get(url)
      .map(res => ScrUser.fromObj(res))
      .toPromise();
  }
}
