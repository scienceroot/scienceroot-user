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
require("rxjs/add/operator/map");
var interest_model_1 = require("./interest.model");
var ScrUserFieldOfInterestService = /** @class */ (function () {
    function ScrUserFieldOfInterestService(httpClient) {
        this.httpClient = httpClient;
    }
    ScrUserFieldOfInterestService.prototype.get = function (q) {
        var url = user_store_1.ScrUserStore.interest();
        var params = new http_1.HttpParams();
        params = params.set('q', q);
        return this.httpClient.get(url, { params: params })
            .map(function (res) { return interest_model_1.ScrUserFieldOfInterest.fromObjectArray(res); })
            .toPromise();
    };
    ScrUserFieldOfInterestService.prototype.save = function (industry) {
        var url = user_store_1.ScrUserStore.industry();
        return this.httpClient.post(url, industry)
            .map(function (res) { return interest_model_1.ScrUserFieldOfInterest.fromObject(res); })
            .toPromise();
    };
    ScrUserFieldOfInterestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScrUserFieldOfInterestService);
    return ScrUserFieldOfInterestService;
}());
exports.ScrUserFieldOfInterestService = ScrUserFieldOfInterestService;
//# sourceMappingURL=interest.service.js.map