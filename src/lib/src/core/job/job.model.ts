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
      ScrUserIndustry.fromObject(obj.industry)
    );
  }

  constructor(
    public employer?: string,
    public title?: string,
    public industry?: ScrUserIndustry
  ) {
  }
}
