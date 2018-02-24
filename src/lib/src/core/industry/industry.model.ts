export class ScrUserIndustry {

  public static fromObjectArray(objArr: any[] = []) {
    let mapFnc = (obj: any) => ScrUserIndustry.fromObject(obj);

    return objArr.map(mapFnc);
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


