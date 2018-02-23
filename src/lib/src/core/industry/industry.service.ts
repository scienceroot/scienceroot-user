import {Injectable} from "@angular/core";
import {ScrUser} from "../user.model";
import {ScrUserIndustry} from "./industry.model";
import {HttpClient, HttpParams} from "@angular/common/http";

const SCR_BASE_PATH: string = 'https://api.scienceroots.com';
//const SCR_BASE_PATH: string = 'http://localhost:8080';
const SCR_INDUSTRY_BASE_PATH: string = SCR_BASE_PATH + '/industries/';

@Injectable()
export class ScrIndustryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public get(q: string): Promise<ScrUserIndustry[]> {
    let url: string = SCR_INDUSTRY_BASE_PATH;
    let params = new HttpParams();

    params = params.set('q', q);

    return this.httpClient.get(url, {params: params})
      .map((res: any) => ScrUserIndustry.fromObjectArray(res))
      .toPromise();
  }
}
