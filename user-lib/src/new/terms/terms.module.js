"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var terms_component_1 = require("./terms.component");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var ScrUserNewTermsModule = /** @class */ (function () {
    function ScrUserNewTermsModule() {
    }
    ScrUserNewTermsModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                material_1.MatCheckboxModule
            ],
            declarations: [
                terms_component_1.ScrUserNewTermsComponent
            ],
            exports: [
                terms_component_1.ScrUserNewTermsComponent
            ],
            providers: []
        })
    ], ScrUserNewTermsModule);
    return ScrUserNewTermsModule;
}());
exports.ScrUserNewTermsModule = ScrUserNewTermsModule;
//# sourceMappingURL=terms.module.js.map