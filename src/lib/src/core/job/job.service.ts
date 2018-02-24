import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ScrUserJob} from "./job.model";

@Injectable()
export class ScrUserJobService {

  constructor(private httpClient: HttpClient) {
  }

  public get(userId: string): Promise<ScrUserJob[]> {
    return Promise.resolve([]);
  }

  public save(job: ScrUserJob, userId: string): Promise<ScrUserJob> {

  }
}
