import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ScrUserLanguage} from "./language.model";
import {ScrUserStore} from "../../store/user.store";

@Injectable()
export class ScrUserLanguageService {

  constructor(private _http: HttpClient) {
  }

  public get(q: string): Promise<ScrUserLanguage[]> {
    let url: string = ScrUserStore.language();
    let params = new HttpParams();

    params = params.set('q', q);

    return this._http.get(url, {params: params})
      .map((res: any) => ScrUserLanguage.fromObjectArray(res))
      .toPromise();
  }
}
