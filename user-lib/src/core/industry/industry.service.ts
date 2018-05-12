import {Injectable} from "@angular/core";
import {ScrUserIndustry} from "./industry.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ScrUserStore} from "../../store/user.store";

@Injectable()
export class ScrIndustryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public get(q: string): Promise<ScrUserIndustry[]> {
    let url: string = ScrUserStore.industry();
    let params = new HttpParams();

    params = params.set('q', q);

    return this.httpClient.get(url, {params: params})
      .map((res: any) => ScrUserIndustry.fromObjectArray(res))
      .toPromise();
  }

  public save(industry: ScrUserIndustry): Promise<ScrUserIndustry> {
    let url: string = ScrUserStore.industry();

    return this.httpClient.post(url, industry)
      .map((res: any) => ScrUserIndustry.fromObject(res))
      .toPromise();
  }
}
