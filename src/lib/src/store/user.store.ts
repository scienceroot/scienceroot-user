import {ScrUserStoreConfigModel} from "./user-store-config.model";

export class ScrUserStore {

  public static register(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return config.register;
  }

  public static byId(userId: string): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}`;
  }

  public static jobsById(userId: string): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}/jobs`;
  }

  public static getMe(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/me`;
  }

  public static industry(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return config.industry;
  }
}
