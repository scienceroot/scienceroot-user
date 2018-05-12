"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_store_config_model_1 = require("./user-store-config.model");
var ScrUserStore = /** @class */ (function () {
    function ScrUserStore() {
    }
    ScrUserStore.register = function () {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return config.register;
    };
    ScrUserStore.byId = function (userId) {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return config.base + "/" + userId;
    };
    ScrUserStore.contactById = function (userId) {
        return ScrUserStore.byId(userId) + "/contact";
    };
    ScrUserStore.jobsById = function (userId) {
        return ScrUserStore.byId(userId) + "/jobs";
    };
    ScrUserStore.interestsById = function (userId) {
        return ScrUserStore.byId(userId) + "/interests";
    };
    ScrUserStore.languagesById = function (userId) {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return ScrUserStore.byId(userId) + "/languages";
    };
    ScrUserStore.getMe = function () {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return config.base + "/me";
    };
    ScrUserStore.industry = function () {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return config.industry;
    };
    ScrUserStore.interest = function () {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return config.interest;
    };
    ScrUserStore.language = function () {
        var config = user_store_config_model_1.ScrUserStoreConfigModel.fetch();
        return config.language;
    };
    ScrUserStore.follow = function (activeUserId, toFollowUserId) {
        return ScrUserStore.byId(activeUserId) + "/follow/" + toFollowUserId;
    };
    ScrUserStore.unfollow = function (activeUserId, toUnfollowUserId) {
        return ScrUserStore.byId(activeUserId) + "/unfollow/" + toUnfollowUserId;
    };
    ScrUserStore.isFollowing = function (activeUserId, isFollowingUserId) {
        return ScrUserStore.byId(activeUserId) + "/isFollowing/" + isFollowingUserId;
    };
    ScrUserStore.followedBy = function (userId) {
        return ScrUserStore.byId(userId) + "/followedBy";
    };
    ScrUserStore.follows = function (userId) {
        return ScrUserStore.byId(userId) + "/follows";
    };
    return ScrUserStore;
}());
exports.ScrUserStore = ScrUserStore;
//# sourceMappingURL=user.store.js.map