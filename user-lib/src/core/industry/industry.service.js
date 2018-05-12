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
var industry_model_1 = require("./industry.model");
var http_1 = require("@angular/common/http");
var user_store_1 = require("../../store/user.store");
var ScrIndustryService = /** @class */ (function () {
    function ScrIndustryService(httpClient) {
        this.httpClient = httpClient;
    }
    ScrIndustryService.prototype.get = function (q) {
        var url = user_store_1.ScrUserStore.industry();
        var params = new http_1.HttpParams();
        params = params.set('q', q);
        return this.httpClient.get(url, { params: params })
            .map(function (res) { return industry_model_1.ScrUserIndustry.fromObjectArray(res); })
            .toPromise();
    };
    ScrIndustryService.prototype.save = function (industry) {
        var url = user_store_1.ScrUserStore.industry();
        return this.httpClient.post(url, industry)
            .map(function (res) { return industry_model_1.ScrUserIndustry.fromObject(res); })
            .toPromise();
    };
    ScrIndustryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScrIndustryService);
    return ScrIndustryService;
}());
exports.ScrIndustryService = ScrIndustryService;
//# sourceMappingURL=industry.service.js.map