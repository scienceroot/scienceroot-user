"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var user_store_1 = require("../../store/user.store");
var user_model_1 = require("../user.model");
var ScrUserFollowerService = /** @class */ (function () {
    function ScrUserFollowerService(_httpClient) {
        this._httpClient = _httpClient;
    }
    ScrUserFollowerService.prototype.follow = function (userId, toFollowUserId) {
        var url = user_store_1.ScrUserStore.follow(userId, toFollowUserId);
        return this._httpClient.post(url, null)
            .map(user_model_1.ScrUser.fromObj)
            .toPromise();
    };
    ScrUserFollowerService.prototype.unfollow = function (userId, toUnfollowUserId) {
        var url = user_store_1.ScrUserStore.unfollow(userId, toUnfollowUserId);
        return this._httpClient.delete(url)
            .map(user_model_1.ScrUser.fromObj)
            .toPromise();
    };
    ScrUserFollowerService.prototype.isFollowing = function (userId, isFollowingUserId) {
        var url = user_store_1.ScrUserStore.isFollowing(userId, isFollowingUserId);
        return this._httpClient.get(url)
            .map(user_model_1.ScrUser.fromObj)
            .toPromise();
    };
    ScrUserFollowerService.prototype.isFollowedBy = function (userId) {
        var url = user_store_1.ScrUserStore.followedBy(userId);
        return this._httpClient.get(url)
            .map(user_model_1.ScrUser.fromObjArr)
            .toPromise();
    };
    ScrUserFollowerService.prototype.follows = function (userId) {
        var url = user_store_1.ScrUserStore.follows(userId);
        return this._httpClient.get(url)
            .map(user_model_1.ScrUser.fromObjArr)
            .toPromise();
    };
    ScrUserFollowerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScrUserFollowerService);
    return ScrUserFollowerService;
}());
exports.ScrUserFollowerService = ScrUserFollowerService;
//# sourceMappingURL=follower.service.js.map