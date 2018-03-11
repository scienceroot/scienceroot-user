export class ScrUserLanguage {

  public static fromObjectArray(objArr: any[]): ScrUserLanguage[] {
    let mapFnc = (obj: any) => ScrUserLanguage.fromObject(obj);

    return objArr.map(mapFnc);
  }

  public static fromObject(obj: any): ScrUserLanguage {
    return new ScrUserLanguage(obj.id, obj.name);
  }

  constructor(
    public id: string,
    public name: string
  ) {
  }
}
