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
var job_service_1 = require("./job.service");
var job_component_1 = require("./job.component");
var common_1 = require("@angular/common");
__export(require("./job.model"));
__export(require("./job.service"));
__export(require("./job.component"));
var ScrUserJobModule = /** @class */ (function () {
    function ScrUserJobModule() {
    }
    ScrUserJobModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                job_component_1.ScrUserJobComponent
            ],
            exports: [
                job_component_1.ScrUserJobComponent
            ],
            providers: [
                job_service_1.ScrUserJobService
            ]
        })
    ], ScrUserJobModule);
    return ScrUserJobModule;
}());
exports.ScrUserJobModule = ScrUserJobModule;
//# sourceMappingURL=job.module.js.map