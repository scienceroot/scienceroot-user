export class ScrUserFieldOfInterest {

  public static fromObjectArray(objArr: any[] = []) {
    let mapFnc = (obj: any) => ScrUserFieldOfInterest.fromObject(obj);

    return objArr.map(mapFnc);
  }

  public static fromObject(obj: any) {
    return new ScrUserFieldOfInterest(
      obj.id,
      obj.name
    );
  }

  constructor(
    public id?: string,
    public name?: string
  ) {
  }
}
