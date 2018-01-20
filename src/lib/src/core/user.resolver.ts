import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ScrUser} from "./user.model";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ScrUserService} from "./user.service";

@Injectable()
export class ScrUserResolver implements Resolve<ScrUser> {

  constructor(private userService: ScrUserService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ScrUser> | Promise<ScrUser> | ScrUser {

    return this.userService.byUserId(route.params.userId);
  }

}
