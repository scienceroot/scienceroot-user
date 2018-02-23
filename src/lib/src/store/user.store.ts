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

  public static getMe(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/me`;
  }
}
