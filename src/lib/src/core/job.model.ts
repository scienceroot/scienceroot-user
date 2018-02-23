import {ScrUserJobTitle} from "./job-title.model";
import {ScrUserIndustry} from "./industry/industry.model";

export class ScrUserJob {

  constructor(
    public employer?: string,
    public title?: ScrUserJobTitle,
    public industry?: ScrUserIndustry
  ) {
  }
}
