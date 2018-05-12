import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ScrUser} from './user.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ScrActiveUserService} from '../active/active-user.service';
import {ScrAuthenticationStore} from '@scienceroot/security';
import {ScrUserStore} from '../store/user.store';
import {ScrUserJob} from './job/job.model';
import {ScrUserFieldOfInterest} from './interest/interest.model';
import {ScrUserLanguage} from './language/language.model';

@Injectable()
export class ScrUserService {

  constructor(
    private _httpClient: HttpClient,
    private _activeUserService: ScrActiveUserService
  ) {

  }

  public create(newUser: ScrUser): Promise<ScrUser> {
    const url: string = ScrUserStore.register();

    return this._httpClient
      .post(url, newUser, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<any>) => {
          const token = res.headers.get('Authorization');
          const user: ScrUser = ScrUser.fromObj(res.body);

          ScrAuthenticationStore.setToken(token);

          return user;
        })
      )
      .toPromise();
  }

  public byUserId(userId: string): Promise<ScrUser> {
    const url = ScrUserStore.byId(userId);

    return this._httpClient.get(url)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public addLanguage(newLanguage: ScrUserLanguage): Promise<ScrUser> {
    const activeUser = this._activeUserService.get();
    const url: string = ScrUserStore.languagesById(activeUser.uid);

    return this._httpClient.post(url, newLanguage)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public removeLanguage(languageToRemove: ScrUserLanguage): Promise<ScrUser> {
    const activeUser = this._activeUserService.get();
    const url: string = ScrUserStore.languagesById(activeUser.uid) + '/' + languageToRemove.id;

    return this._httpClient.delete(url)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public addJob(newJob: ScrUserJob): Promise<ScrUser> {
    const activeUser = this._activeUserService.get();
    const url: string = ScrUserStore.jobsById(activeUser.uid);

    return this._httpClient.post(url, newJob)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public removeJob(jobToRemove: ScrUserJob): Promise<ScrUser> {
    const activeUser = this._activeUserService.get();
    const url: string = ScrUserStore.jobsById(activeUser.uid) + '/' + jobToRemove.id;

    return this._httpClient.delete(url)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public addInterest(newInterest: ScrUserFieldOfInterest): Promise<ScrUser> {
    const activeUser = this._activeUserService.get();
    const url: string = ScrUserStore.interestsById(activeUser.uid);

    return this._httpClient.post(url, newInterest)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public removeInterest(interestToRemove: ScrUserFieldOfInterest): Promise<ScrUser> {
    const activeUser = this._activeUserService.get();
    const url: string = ScrUserStore.interestsById(activeUser.uid) + '/' + interestToRemove.id;

    return this._httpClient
      .delete(url)
      .pipe(
        map(res => ScrUser.fromObj(res))
      )
      .toPromise();
  }

  public setPublicAddress(userId: string, publicKey: string): Promise<any> {
    const url = ScrUserStore.address(userId);
    console.log(publicKey)
    return this._httpClient
      .post(url, publicKey)
      .toPromise();
  }
}
