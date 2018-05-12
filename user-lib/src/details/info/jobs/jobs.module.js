"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jobs_component_1 = require("./jobs.component");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var job_module_1 = require("../../../core/job/job.module");
var ScrUserDetailsInfoJobsModule = /** @class */ (function () {
    function ScrUserDetailsInfoJobsModule() {
    }
    ScrUserDetailsInfoJobsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatIconModule,
                job_module_1.ScrUserJobModule
            ],
            declarations: [
                jobs_component_1.ScrUserDetailsInfoJobsComponent
            ],
            exports: [
                jobs_component_1.ScrUserDetailsInfoJobsComponent
            ],
            providers: []
        })
    ], ScrUserDetailsInfoJobsModule);
    return ScrUserDetailsInfoJobsModule;
}());
exports.ScrUserDetailsInfoJobsModule = ScrUserDetailsInfoJobsModule;
//# sourceMappingURL=jobs.module.js.map