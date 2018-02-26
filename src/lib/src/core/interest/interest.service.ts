import {HttpClient, HttpParams} from "@angular/common/http";
import {ScrUserIndustry} from "../industry/industry.model";
import {Injectable} from "@angular/core";
import {ScrUserStore} from "../../store/user.store";
import "rxjs/add/operator/map";
import {ScrUserFieldOfInterest} from "./interest.model";

@Injectable()
export class ScrUserFieldOfInterestService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public get(q: string): Promise<ScrUserFieldOfInterest[]> {
    let url: string = ScrUserStore.interest();
    let params = new HttpParams();

    params = params.set('q', q);

    return this.httpClient.get(url, {params: params})
      .map((res: any) => ScrUserFieldOfInterest.fromObjectArray(res))
      .toPromise();
  }

  public save(industry: ScrUserIndustry): Promise<ScrUserFieldOfInterest> {
    let url: string = ScrUserStore.industry();

    return this.httpClient.post(url, industry)
      .map((res: any) => ScrUserFieldOfInterest.fromObject(res))
      .toPromise();
  }
}
