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
var active_user_service_1 = require("../../active/active-user.service");
var ScrUserDetailsNewsfeedComponent = /** @class */ (function () {
    function ScrUserDetailsNewsfeedComponent(_activatedRoute, _activeUserService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._activeUserService = _activeUserService;
        this.activeUser = this._activeUserService.get();
        this._activatedRoute.data.subscribe(function (data) {
            _this.user = data.user;
        });
    }
    ScrUserDetailsNewsfeedComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <scr-user-profile [user]=\"user\">\n      <scr-feed-user  [userId]=\"user.uid\"\n                      [activeUser]=\"activeUser\">\n      </scr-feed-user>\n    </scr-user-profile>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            active_user_service_1.ScrActiveUserService])
    ], ScrUserDetailsNewsfeedComponent);
    return ScrUserDetailsNewsfeedComponent;
}());
exports.ScrUserDetailsNewsfeedComponent = ScrUserDetailsNewsfeedComponent;
//# sourceMappingURL=newsfeed.component.js.map