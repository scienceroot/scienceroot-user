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
var ScrUserContactService = /** @class */ (function () {
    function ScrUserContactService(_httpClient) {
        this._httpClient = _httpClient;
    }
    ScrUserContactService.prototype.update = function (userId, contact) {
        var url = user_store_1.ScrUserStore.contactById(userId);
        return this._httpClient.post(url, contact.toRequest())
            .toPromise();
    };
    ScrUserContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScrUserContactService);
    return ScrUserContactService;
}());
exports.ScrUserContactService = ScrUserContactService;
//# sourceMappingURL=contact.service.js.map