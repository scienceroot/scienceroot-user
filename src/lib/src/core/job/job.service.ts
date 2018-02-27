import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ScrUserJob} from "./job.model";

@Injectable()
export class ScrUserJobService {

  constructor(private httpClient: HttpClient) {
  }

  // FIXME
  public get(userId: string): Promise<ScrUserJob[]> {
    return Promise.resolve([]);
  }
}
