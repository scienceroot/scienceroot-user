import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ScrActiveUserService} from './active-user.service';
import {ScrUser} from '../core/user.model';

@Injectable()
export class ScrActiveUserResolver implements Resolve<ScrUser> {

  constructor(
    private activeUserService: ScrActiveUserService
  ) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ScrUser> | Promise<ScrUser> | ScrUser {

    return this.activeUserService.get();
  }

}
