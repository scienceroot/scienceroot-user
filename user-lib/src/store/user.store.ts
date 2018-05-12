import {ScrUserStoreConfigModel} from './user-store-config.model';

export class ScrUserStore {

  public static register(): string {
    const config = ScrUserStoreConfigModel.fetch();

    return config.register;
  }

  public static byId(userId: string): string {
    const config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/${userId}`;
  }

  public static contactById(userId: string): string {
    return `${ScrUserStore.byId(userId)}/contact`;
  }

  public static jobsById(userId: string): string {
    return `${ScrUserStore.byId(userId)}/jobs`;
  }

  public static interestsById(userId: string): string {
    return `${ScrUserStore.byId(userId)}/interests`;
  }

  public static languagesById(userId: string): string {
    const config = ScrUserStoreConfigModel.fetch();

    return `${ScrUserStore.byId(userId)}/languages`;
  }

  public static getMe(): string {
    const config = ScrUserStoreConfigModel.fetch();

    return `${config.base}/me`;
  }

  public static industry(): string {
    const config = ScrUserStoreConfigModel.fetch();

    return config.industry;
  }

  public static interest(): string {
    const config = ScrUserStoreConfigModel.fetch();

    return config.interest;
  }

  public static language(): string {
    const config = ScrUserStoreConfigModel.fetch();

    return config.language;
  }

  public static follow(activeUserId: string, toFollowUserId: string): string {
    return `${ScrUserStore.byId(activeUserId)}/follow/${toFollowUserId}`;
  }

  public static unfollow(activeUserId: string, toUnfollowUserId: string): string {
    return `${ScrUserStore.byId(activeUserId)}/unfollow/${toUnfollowUserId}`;
  }

  public static isFollowing(activeUserId: string, isFollowingUserId: string): string {
    return `${ScrUserStore.byId(activeUserId)}/isFollowing/${isFollowingUserId}`;
  }

  public static followedBy(userId: string): string {
    return `${ScrUserStore.byId(userId)}/followedBy`;
  }

  public static follows(userId: string): string {
    return `${ScrUserStore.byId(userId)}/follows`;
  }

  public static address(userId: string): string {
    return `${ScrUserStore.byId(userId)}/publickey`;
  }
}
