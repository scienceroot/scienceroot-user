"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var wallet_info_component_1 = require("./wallet-info.component");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var ScrUserEditWalletInfoModule = /** @class */ (function () {
    function ScrUserEditWalletInfoModule() {
    }
    ScrUserEditWalletInfoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule
            ],
            declarations: [
                wallet_info_component_1.ScrUserEditWalletInfoComponent
            ],
            exports: [
                wallet_info_component_1.ScrUserEditWalletInfoComponent
            ],
            providers: []
        })
    ], ScrUserEditWalletInfoModule);
    return ScrUserEditWalletInfoModule;
}());
exports.ScrUserEditWalletInfoModule = ScrUserEditWalletInfoModule;
//# sourceMappingURL=wallet-info.module.js.map