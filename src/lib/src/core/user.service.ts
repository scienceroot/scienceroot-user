import {Injectable} from "@angular/core";
import {ScrUser} from "./user.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import "rxjs/add/operator/map";
import {ScrActiveUserService} from "../active/active-user.service";
import {ScrAuthenticationStore} from "@scienceroot/security";
import {ScrUserStore} from "../store/user.store";

@Injectable()
export class ScrUserService {

    constructor(
      private httpClient: HttpClient
    ) {

    }

    public create(newUser: ScrUser): Promise<ScrUser> {
      let url: string = ScrUserStore.register();

      return this.httpClient
        .post(url, newUser, { observe: 'response' })
        .map((res: HttpResponse<any>) => {
          let token = res.headers.get('Authorization');
          let user: ScrUser = ScrUser.fromObj(res.body);

          ScrAuthenticationStore.setToken(token);
          this.activeUserService.set(user);

          return user;
        })
        .toPromise();
    }

    public byUserId(userId: string): Promise<ScrUser> {
      let url = ScrUserStore.byId(userId);

      return this.httpClient.get(url)
        .map(res => ScrUser.fromObj(res))
        .toPromise();
    }
}
