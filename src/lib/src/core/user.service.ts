import {Injectable} from "@angular/core";
import {ScrUser} from "./user.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import "rxjs/add/operator/map";
import {ScrActiveUserService} from "./active-user.service";
import {ScrAuthenticationTokenStore} from "@scienceroot/security";


const SCR_USER_BASE_PATH: string = 'https://api.scienceroots.com/users';
const SCR_USER_RESGISTER_PATH: string = SCR_USER_BASE_PATH + '/register';

@Injectable()
export class ScrUserService {

    constructor(
      private httpClient: HttpClient,
      private activeUserService: ScrActiveUserService
    ) {
    }

    public create(newUser: ScrUser): Promise<ScrUser> {
      return this.httpClient
        .post(SCR_USER_RESGISTER_PATH, newUser, { observe: 'response' })
        .map((res: HttpResponse<any>) => {
          let token = res.headers.get('Authorization');
          let user: ScrUser = ScrUser.fromObj(res.body);

          ScrAuthenticationTokenStore.setToken(token);
          this.activeUserService.set(user);

          return user;
        })
        .toPromise();
    }

    public byUserId(userId: string): Promise<ScrUser> {
      return Promise.reject("Not implemented yet.");
    }
}
