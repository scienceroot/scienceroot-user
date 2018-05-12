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
var user_model_1 = require("./user.model");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var active_user_service_1 = require("../active/active-user.service");
var security_1 = require("@scienceroot/security");
var user_store_1 = require("../store/user.store");
var ScrUserService = /** @class */ (function () {
    function ScrUserService(httpClient, activeUserService) {
        this.httpClient = httpClient;
        this.activeUserService = activeUserService;
    }
    ScrUserService.prototype.create = function (newUser) {
        var url = user_store_1.ScrUserStore.register();
        return this.httpClient
            .post(url, newUser, { observe: 'response' })
            .map(function (res) {
            var token = res.headers.get('Authorization');
            var user = user_model_1.ScrUser.fromObj(res.body);
            security_1.ScrAuthenticationStore.setToken(token);
            return user;
        })
            .toPromise();
    };
    ScrUserService.prototype.byUserId = function (userId) {
        var url = user_store_1.ScrUserStore.byId(userId);
        return this.httpClient.get(url)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService.prototype.addLanguage = function (newLanguage) {
        var activeUser = this.activeUserService.get();
        var url = user_store_1.ScrUserStore.languagesById(activeUser.uid);
        return this.httpClient.post(url, newLanguage)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService.prototype.removeLanguage = function (languageToRemove) {
        var activeUser = this.activeUserService.get();
        var url = user_store_1.ScrUserStore.languagesById(activeUser.uid) + '/' + languageToRemove.id;
        return this.httpClient.delete(url)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService.prototype.addJob = function (newJob) {
        var activeUser = this.activeUserService.get();
        var url = user_store_1.ScrUserStore.jobsById(activeUser.uid);
        return this.httpClient.post(url, newJob)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService.prototype.removeJob = function (jobToRemove) {
        var activeUser = this.activeUserService.get();
        var url = user_store_1.ScrUserStore.jobsById(activeUser.uid) + '/' + jobToRemove.id;
        return this.httpClient.delete(url)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService.prototype.addInterest = function (newInterest) {
        var activeUser = this.activeUserService.get();
        var url = user_store_1.ScrUserStore.interestsById(activeUser.uid);
        return this.httpClient.post(url, newInterest)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService.prototype.removeInterest = function (interestToRemove) {
        var activeUser = this.activeUserService.get();
        var url = user_store_1.ScrUserStore.interestsById(activeUser.uid) + '/' + interestToRemove.id;
        return this.httpClient.delete(url)
            .map(function (res) { return user_model_1.ScrUser.fromObj(res); })
            .toPromise();
    };
    ScrUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            active_user_service_1.ScrActiveUserService])
    ], ScrUserService);
    return ScrUserService;
}());
exports.ScrUserService = ScrUserService;
//# sourceMappingURL=user.service.js.map