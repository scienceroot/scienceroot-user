export class ScrUserStoreConfigModel {

  public static readonly storageKeys: any = {
    register: 'scr.user.register',
    base: 'scr.user.base'
  };

  public static fetch(): ScrUserStoreConfigModel {
    let base = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.base) || '';
    let register = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.register) || '';

    return new ScrUserStoreConfigModel(base, register);
  }

  constructor(
    public base: string,
    public register: string
  ) {

  }

  public save() {
    for(let key in ScrUserStoreConfigModel.storageKeys) {
      sessionStorage.setItem(
        ScrUserStoreConfigModel.storageKeys[key],
        this[key]
      );
    }
  }
}
