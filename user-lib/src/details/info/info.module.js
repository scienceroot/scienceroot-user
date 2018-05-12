"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_module_1 = require("../../core/contact/contact.module");
var info_component_1 = require("./info.component");
var common_1 = require("@angular/common");
var profile_module_1 = require("../profile/profile.module");
var jobs_module_1 = require("./jobs/jobs.module");
var interests_module_1 = require("./interests/interests.module");
var material_1 = require("@angular/material");
var languages_module_1 = require("./languages/languages.module");
var ScrUserDetailsInfoModule = /** @class */ (function () {
    function ScrUserDetailsInfoModule() {
    }
    ScrUserDetailsInfoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatIconModule,
                material_1.MatDividerModule,
                contact_module_1.ScrUserContactModule,
                profile_module_1.ScrUserProfileModule,
                jobs_module_1.ScrUserDetailsInfoJobsModule,
                interests_module_1.ScrUserDetailsInfoInterestsModule,
                languages_module_1.ScrUserDetailsInfoLanguageModule
            ],
            declarations: [
                info_component_1.ScrUserDetailsInfoComponent
            ],
            exports: [
                info_component_1.ScrUserDetailsInfoComponent
            ],
            providers: []
        })
    ], ScrUserDetailsInfoModule);
    return ScrUserDetailsInfoModule;
}());
exports.ScrUserDetailsInfoModule = ScrUserDetailsInfoModule;
//# sourceMappingURL=info.module.js.map