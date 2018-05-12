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
var router_1 = require("@angular/router");
var follower_service_1 = require("../../core/follower/follower.service");
var ScrUserDetailsFollowedByComponent = /** @class */ (function () {
    function ScrUserDetailsFollowedByComponent(_activatedRoute, _followService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._followService = _followService;
        this._activatedRoute.data
            .subscribe(function (data) { return _this._onRouteDataChange(data); });
    }
    ScrUserDetailsFollowedByComponent.prototype._onRouteDataChange = function (data) {
        this.user = data.user;
        this._fetchFollowedByUsers(this.user.uid);
    };
    ScrUserDetailsFollowedByComponent.prototype._fetchFollowedByUsers = function (userId) {
        var _this = this;
        this.followedByReq = this._followService.isFollowedBy(userId);
        this.followedByReq.then(function (follows) { return _this.followedBy = follows; });
    };
    ScrUserDetailsFollowedByComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <scr-user-profile [user]=\"user\">\n      <div class=\"mat-headline\">\n        Followers\n      </div>\n      <scr-loading [waitFor]=\"followedByReq\">\n        <div onFinish>\n          <ng-container *ngIf=\"!!followedBy\">\n            <ng-container *ngIf=\"followedBy.length > 0; then list else empty;\">\n            </ng-container>\n          </ng-container>\n        </div>\n      </scr-loading>\n    </scr-user-profile>\n\n    <ng-template #empty>\n      <div class=\"mat-body-1\">\n        <span>Currently nobody follows this user.</span>\n      </div>\n    </ng-template>\n\n    <ng-template #list>\n      <ng-container *ngFor=\"let user of (followedByReq | async)\">\n        <div>\n          <div>\n            <span>{{user.forename}} {{user.lastname}}</span>\n          </div>\n        </div>\n      </ng-container>\n    </ng-template>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            follower_service_1.ScrUserFollowerService])
    ], ScrUserDetailsFollowedByComponent);
    return ScrUserDetailsFollowedByComponent;
}());
exports.ScrUserDetailsFollowedByComponent = ScrUserDetailsFollowedByComponent;
//# sourceMappingURL=followedBy.component.js.map