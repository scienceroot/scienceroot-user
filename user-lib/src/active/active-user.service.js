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
var user_model_1 = require("../core/user.model");
var Subject_1 = require("rxjs/Subject");
var security_1 = require("@scienceroot/security");
var user_store_1 = require("../store/user.store");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var ScrActiveUserService = /** @class */ (function () {
    function ScrActiveUserService(httpClient, loginService, router) {
        var _this = this;
        this.httpClient = httpClient;
        this.loginService = loginService;
        this.router = router;
        this.activeUserChanged = new Subject_1.Subject();
        this.storageKey = 'src.user.active';
        this.loginService.loginStateChanged
            .subscribe(function (state) {
            if (state) {
                _this.resolveActiveUser()
                    .then(function (user) { return _this.set(user); });
            }
        });
    }
    ScrActiveUserService.prototype.set = function (user) {
        var userStr = JSON.stringify(user);
        sessionStorage.setItem(this.storageKey, userStr);
        this.activeUserChanged.next(user);
    };
    ScrActiveUserService.prototype.get = function () {
        var user = null;
        var userStr = sessionStorage.getItem(this.storageKey);
        if (!!userStr) {
            try {
                var userObj = JSON.parse(userStr);
                user = user_model_1.ScrUser.fromObj(userObj);
            }
            catch (error) {
                // stored user is somehow corrupted
                sessionStorage.removeItem(this.storageKey);
                console.error(error);
            }
            finally {
                return user;
            }
        }
        return user;
    };
    ScrActiveUserService.prototype.resolveActiveUser = function () {
        var _this = this;
        var url = user_store_1.ScrUserStore.getMe();
        return this.httpClient.get(url)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise()
            .catch(function (error) {
            console.error(error);
            localStorage.clear();
            _this.router.navigate(['/login']);
            return null;
        });
    };
    ScrActiveUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            security_1.ScrAuthenticationLoginService,
            router_1.Router])
    ], ScrActiveUserService);
    return ScrActiveUserService;
}());
exports.ScrActiveUserService = ScrActiveUserService;
//# sourceMappingURL=active-user.service.js.map