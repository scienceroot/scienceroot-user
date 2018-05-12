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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_module_1 = require("../new/new.module");
var user_service_1 = require("./user.service");
__export(require("./user.model"));
__export(require("./user.resolver"));
__export(require("./user.service"));
var ScrUserCoreModule = /** @class */ (function () {
    function ScrUserCoreModule() {
    }
    ScrUserCoreModule = __decorate([
        core_1.NgModule({
            imports: [
                new_module_1.ScrUserNewModule
            ],
            declarations: [],
            exports: [],
            providers: [
                user_service_1.ScrUserService,
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ScrUserCoreModule);
    return ScrUserCoreModule;
}());
exports.ScrUserCoreModule = ScrUserCoreModule;
//# sourceMappingURL=core.module.js.map