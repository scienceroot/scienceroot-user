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

  public static contactById(userId: string): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}/contact`;
  }

  public static jobsById(userId: string): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}/jobs`;
  }

  public static interestsById(userId: string): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}/interests`;
  }

  public static languagesById(userId: string): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}/languages`;
  }

  public static getMe(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/me`;
  }

  public static industry(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return config.industry;
  }

  public static interest(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return config.interest;
  }

  public static language(): string {
    let config = ScrUserStoreConfigModel.fetch();

    return config.language;
  }
}
