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
var core_1 = require("@angular/core");
var active_user_service_1 = require("../../active/active-user.service");
var follower_service_1 = require("./follower.service");
var ScrUserFollowButtonComponent = /** @class */ (function () {
    function ScrUserFollowButtonComponent(_activeUserService, _followService) {
        this._activeUserService = _activeUserService;
        this._followService = _followService;
        var activeUser = this._activeUserService.get();
        this.activeUserId = !!activeUser ? activeUser.uid : null;
    }
    ScrUserFollowButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activeUserId !== this.userId) {
            this.isFollowingReq = this._followService.isFollowing(this.activeUserId, this.userId);
            this.isFollowingReq
                .then(function () { return _this.isFollowing = true; })
                .catch(function (error) {
                if (error.status === 404) {
                    _this.isFollowing = false;
                }
            });
        }
    };
    ScrUserFollowButtonComponent.prototype.onBtnClick = function () {
        var _this = this;
        if (this.isFollowing) {
            this._followService.unfollow(this.activeUserId, this.userId)
                .then(function () { return _this.isFollowing = false; });
        }
        else {
            this._followService.follow(this.activeUserId, this.userId)
                .then(function () { return _this.isFollowing = true; });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScrUserFollowButtonComponent.prototype, "userId", void 0);
    ScrUserFollowButtonComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-follow-button',
            template: "\n    <ng-container *ngIf=\"!!userId && !!activeUserId && activeUserId !== userId\">\n      <button mat-raised-button=\"\"\n              color=\"accent\"\n              (click)=\"onBtnClick()\">\n        <ng-container *ngIf=\"isFollowing\">\n          <span>Unfollow</span>\n        </ng-container>\n        <ng-container *ngIf=\"!isFollowing\">\n          <span>Follow</span>\n        </ng-container>\n      </button>\n    </ng-container>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [active_user_service_1.ScrActiveUserService,
            follower_service_1.ScrUserFollowerService])
    ], ScrUserFollowButtonComponent);
    return ScrUserFollowButtonComponent;
}());
exports.ScrUserFollowButtonComponent = ScrUserFollowButtonComponent;
//# sourceMappingURL=follow-btn.component.js.map