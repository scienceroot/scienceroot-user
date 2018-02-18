import {Injectable} from "@angular/core";
import {ScrUser} from "./user.model";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class ScrUserService {

    constructor(private httpClient: HttpClient) {
    }

    public create(newUser: ScrUser): Promise<any> {
      let url = 'https://api.scienceroots.com/users';

      return this.httpClient.post(url, newUser)
        .map(res => {
          console.log(res);

          return res;
        })
        .toPromise();
    }

    public byUserId(userId: string): Promise<ScrUser> {
      return Promise.reject("Not implemented yet.");
    }
}
