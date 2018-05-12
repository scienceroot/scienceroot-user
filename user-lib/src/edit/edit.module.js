"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var edit_module_1 = require("./contact/edit.module");
var edit_component_1 = require("./edit.component");
var jobs_module_1 = require("./jobs/jobs.module");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var interests_module_1 = require("./interests/interests.module");
var wallet_info_module_1 = require("./wallet-info/wallet-info.module");
var languages_module_1 = require("./languages/languages.module");
var ScrUserEditModule = /** @class */ (function () {
    function ScrUserEditModule() {
    }
    ScrUserEditModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatButtonModule,
                material_1.MatDividerModule,
                edit_module_1.ScrUserContactEditModule,
                wallet_info_module_1.ScrUserEditWalletInfoModule,
                jobs_module_1.ScrUserEditJobsModule,
                interests_module_1.ScrUserEditInterestsModule,
                languages_module_1.ScrUserEditLanguagesModule
            ],
            declarations: [
                edit_component_1.ScrUserEditComponent
            ],
            exports: [
                edit_component_1.ScrUserEditComponent
            ],
            providers: []
        })
    ], ScrUserEditModule);
    return ScrUserEditModule;
}());
exports.ScrUserEditModule = ScrUserEditModule;
//# sourceMappingURL=edit.module.js.map