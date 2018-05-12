export class ScrUserStoreConfigModel {

  public static readonly storageKeys: any = {
    register: 'scr.user.register',
    base: 'scr.user.base',
    industry: 'scr.user.industry',
    interest: 'scr.user.interest',
    language: 'scr.user.language'
  };

  public static fetch(): ScrUserStoreConfigModel {
    let base = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.base) || '';
    let register = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.register) || '';
    let industry = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.industry) || '';
    let interest = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.interest) || '';
    let language = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.language) || '';

    return new ScrUserStoreConfigModel(base, register, industry, interest, language);
  }

  constructor(
    public base: string,
    public register: string,
    public industry: string,
    public interest: string,
    public language: string
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
