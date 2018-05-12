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
var wallet_1 = require("@scienceroot/wallet");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wallet_component_1 = require("./wallet.component");
var profile_module_1 = require("../profile/profile.module");
__export(require("./wallet.component"));
var ScrUserWalletModule = /** @class */ (function () {
    function ScrUserWalletModule() {
    }
    ScrUserWalletModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                wallet_1.ScrWalletCoreModule,
                wallet_1.ScrWalletShowModule,
                wallet_1.ScrWalletNewModule,
                profile_module_1.ScrUserProfileModule
            ],
            declarations: [
                wallet_component_1.ScrUserWalletComponent
            ],
            exports: [
                wallet_component_1.ScrUserWalletComponent
            ],
            providers: []
        })
    ], ScrUserWalletModule);
    return ScrUserWalletModule;
}());
exports.ScrUserWalletModule = ScrUserWalletModule;
//# sourceMappingURL=wallet.module.js.map