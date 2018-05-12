import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ScrUserStore} from '../../store/user.store';
import {ScrUserContact} from './contact.model';

@Injectable()
export class ScrUserContactService {

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  public update(userId: string, contact: ScrUserContact): Promise<any> {
    const url = ScrUserStore.contactById(userId);

    return this._httpClient.post(url, contact.toRequest())
      .toPromise();
  }
}
