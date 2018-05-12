"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var language_service_1 = require("./language.service");
__export(require("./language.model"));
__export(require("./language.service"));
var ScrUserLanguageModule = /** @class */ (function () {
    function ScrUserLanguageModule() {
    }
    ScrUserLanguageModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                language_service_1.ScrUserLanguageService
            ]
        })
    ], ScrUserLanguageModule);
    return ScrUserLanguageModule;
}());
exports.ScrUserLanguageModule = ScrUserLanguageModule;
//# sourceMappingURL=language.module.js.map