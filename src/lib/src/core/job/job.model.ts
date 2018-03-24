import {ScrUserIndustry} from "../industry/industry.model";

export class ScrUserJob {

  public static fromObjArr(objArr: any[] = []): ScrUserJob[] {
    let mapFnc = (obj: any) => ScrUserJob.fromObj(obj);

    return objArr.map(mapFnc);
  }

  public static fromObj(obj: any = {}): ScrUserJob {
    return new ScrUserJob(
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
    public employer?: string,
    public title?: string,
    public industry?: ScrUserIndustry,
    public startMonth?: number,
    public startYear?: number,
    public endMonth?: number,
    public endYear?: number
  ) {
  }
}
