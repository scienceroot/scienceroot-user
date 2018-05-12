import {ScrUserIndustry} from "../industry/industry.model";

export class ScrUserJob {

  public static fromObjArr(objArr: any[] = []): ScrUserJob[] {
    let mapFnc = (obj: any) => ScrUserJob.fromObj(obj);
    let sortFnc = (a: ScrUserJob, b: ScrUserJob) => {
      if((a.hasEnd() && b.hasEnd()) || (!a.hasEnd() && !b.hasEnd())) {
        if(a.startYear >= b.startYear) {
          return -1;
        } else if (a.startYear < b.startYear) {
          return 1;
        }
      } else if(a.hasEnd() && !b.hasEnd()) {
        return 1;
      } else if (!a.hasEnd() && b.hasEnd()){
        return -1;
      }
    };
    let jobs: ScrUserJob[] = objArr.map(mapFnc);

    jobs.sort(sortFnc);

    return jobs;
  }

  public static fromObj(obj: any = {}): ScrUserJob {
    return new ScrUserJob(
      obj.id,
      obj.employer,
      obj.title,
      ScrUserIndustry.fromObject(obj.industry),
      obj.startMonth,
      obj.startYear,
      obj.endMonth,
      obj.endYear
    );
  }

  constructor(
    public id?: string,
    public employer?: string,
    public title?: string,
    public industry?: ScrUserIndustry,
    public startMonth?: number,
    public startYear?: number,
    public endMonth?: number,
    public endYear?: number
  ) {
  }

  public hasEnd(): boolean {
    return !!this.endMonth && !!this.endYear;
  }
}
