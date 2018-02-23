export class ScrUserIndustry {

  public static fromObjectArray(objArr: any[]) {
    return objArr.map(obj => ScrUserIndustry.fromObject(obj));
  }

  public static fromObject(obj: any) {
    return new ScrUserIndustry(
      obj.id,
      obj.name,
      obj.displayName
    );
  }

  constructor(
    public id?: number,
    public name?: string,
    public displayName?: string
  ) {

  }
}
