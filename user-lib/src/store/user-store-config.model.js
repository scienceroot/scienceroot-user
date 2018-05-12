"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrUserStoreConfigModel = /** @class */ (function () {
    function ScrUserStoreConfigModel(base, register, industry, interest, language) {
        this.base = base;
        this.register = register;
        this.industry = industry;
        this.interest = interest;
        this.language = language;
    }
    ScrUserStoreConfigModel.fetch = function () {
        var base = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.base) || '';
        var register = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.register) || '';
        var industry = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.industry) || '';
        var interest = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.interest) || '';
        var language = sessionStorage.getItem(ScrUserStoreConfigModel.storageKeys.language) || '';
        return new ScrUserStoreConfigModel(base, register, industry, interest, language);
    };
    ScrUserStoreConfigModel.prototype.save = function () {
        for (var key in ScrUserStoreConfigModel.storageKeys) {
            sessionStorage.setItem(ScrUserStoreConfigModel.storageKeys[key], this[key]);
        }
    };
    ScrUserStoreConfigModel.storageKeys = {
        register: 'scr.user.register',
        base: 'scr.user.base',
        industry: 'scr.user.industry',
        interest: 'scr.user.interest',
        language: 'scr.user.language'
    };
    return ScrUserStoreConfigModel;
}());
exports.ScrUserStoreConfigModel = ScrUserStoreConfigModel;
//# sourceMappingURL=user-store-config.model.js.map