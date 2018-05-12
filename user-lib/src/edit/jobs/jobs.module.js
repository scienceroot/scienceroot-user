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
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var add_module_1 = require("./add/add.module");
var job_module_1 = require("../../core/job/job.module");
var ScrUserEditJobsModule = /** @class */ (function () {
    function ScrUserEditJobsModule() {
    }
    ScrUserEditJobsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                add_module_1.ScrUserEditJobsAddModule,
                job_module_1.ScrUserJobModule
            ],
            declarations: [
                jobs_component_1.ScrUserEditJobsComponent
            ],
            exports: [
                jobs_component_1.ScrUserEditJobsComponent
            ],
            providers: []
        })
    ], ScrUserEditJobsModule);
    return ScrUserEditJobsModule;
}());
exports.ScrUserEditJobsModule = ScrUserEditJobsModule;
//# sourceMappingURL=jobs.module.js.map