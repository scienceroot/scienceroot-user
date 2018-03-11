import {Injectable} from "@angular/core";
import {ScrUser} from "./user.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import "rxjs/add/operator/map";
import {ScrActiveUserService} from "../active/active-user.service";
import {ScrAuthenticationStore} from "@scienceroot/security";
import {ScrUserStore} from "../store/user.store";
import {ScrUserJob} from "./job/job.model";
import {ScrUserFieldOfInterest} from "./interest/interest.model";
import {ScrUserLanguage} from "./language/language.model";

@Injectable()
export class ScrUserService {

  constructor(
    private httpClient: HttpClient,
    private activeUserService: ScrActiveUserService
  ) {

  }

  public create(newUser: ScrUser): Promise<ScrUser> {
    let url: string = ScrUserStore.register();

    return this.httpClient
      .post(url, newUser, {observe: 'response'})
      .map((res: HttpResponse<any>) => {
        let token = res.headers.get('Authorization');
        let user: ScrUser = ScrUser.fromObj(res.body);

        ScrAuthenticationStore.setToken(token);

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

  public addLanguage(newLanguage: ScrUserLanguage): Promise<ScrUser> {
    let activeUser = this.activeUserService.get();
    let url: string = ScrUserStore.languagesById(activeUser.uid);

    return this.httpClient.post(url, newLanguage)
      .map(res => ScrUser.fromObj(res))
      .toPromise();
  }

  public addJob(newJob: ScrUserJob): Promise<ScrUser> {
    let activeUser = this.activeUserService.get();
    let url: string = ScrUserStore.jobsById(activeUser.uid);

    return this.httpClient.post(url, newJob)
      .map(res => ScrUser.fromObj(res))
      .toPromise();
  }

  public addInterest(newInterest: ScrUserFieldOfInterest): Promise<ScrUser> {
    let activeUser = this.activeUserService.get();
    let url: string = ScrUserStore.interestsById(activeUser.uid);

    return this.httpClient.post(url, newInterest)
      .map(res => ScrUser.fromObj(res))
      .toPromise();
  }
}
