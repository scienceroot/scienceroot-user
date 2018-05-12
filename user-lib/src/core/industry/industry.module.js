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
var industry_service_1 = require("./industry.service");
__export(require("./industry.model"));
__export(require("./industry.service"));
var ScrIndustryModule = /** @class */ (function () {
    function ScrIndustryModule() {
    }
    ScrIndustryModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                industry_service_1.ScrIndustryService
            ]
        })
    ], ScrIndustryModule);
    return ScrIndustryModule;
}());
exports.ScrIndustryModule = ScrIndustryModule;
//# sourceMappingURL=industry.module.js.map