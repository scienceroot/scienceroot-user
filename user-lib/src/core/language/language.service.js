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
var http_1 = require("@angular/common/http");
var language_model_1 = require("./language.model");
var user_store_1 = require("../../store/user.store");
var ScrUserLanguageService = /** @class */ (function () {
    function ScrUserLanguageService(_http) {
        this._http = _http;
    }
    ScrUserLanguageService.prototype.get = function (q) {
        var url = user_store_1.ScrUserStore.language();
        var params = new http_1.HttpParams();
        params = params.set('q', q);
        return this._http.get(url, { params: params })
            .map(function (res) { return language_model_1.ScrUserLanguage.fromObjectArray(res); })
            .toPromise();
    };
    ScrUserLanguageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScrUserLanguageService);
    return ScrUserLanguageService;
}());
exports.ScrUserLanguageService = ScrUserLanguageService;
//# sourceMappingURL=language.service.js.map