import {Injectable} from "@angular/core";
import {ScrUser} from "./user.model";

@Injectable()
export class ScrActiveUserService {

  private readonly storageKey: string = 'src.user.active';

  constructor() {
  }

  public set(user: ScrUser) {
    let userStr: string = JSON.stringify(user);

    sessionStorage.setItem(this.storageKey, userStr);
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
}
