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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var job_model_1 = require("./job.model");
var ScrUserJobComponent = /** @class */ (function () {
    function ScrUserJobComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", job_model_1.ScrUserJob)
    ], ScrUserJobComponent.prototype, "job", void 0);
    ScrUserJobComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-job',
            template: "\n    <div class=\"job\">\n      <div>\n        <span class=\"mat-title scr-primary-text\">{{ job.title }}</span>\n        <span class=\"mat-caption job--spacer\">at</span>\n        <span class=\"mat-title  scr-primary-text\">{{ job.employer }}</span>\n        <span class=\"mat-subheading-1\">({{ job.industry?.name }})</span>\n      </div>\n      <div class=\"mat-subheading-1\">\n        <span class=\"start\">{{ job.startMonth }}/{{ job.startYear }}</span>\n        <span> - </span>\n        <ng-container *ngIf=\"!!job.endMonth && !!job.endYear\">\n          <span class=\"end\">{{ job.endMonth }}/{{ job.endYear }}</span>\n        </ng-container>\n        <ng-container *ngIf=\"!job.endMonth || !job.endYear\">\n          <span class=\"end\">Today</span>\n        </ng-container>\n      </div>\n    </div>\n  ",
            styles: ["    \n    .job {\n      margin: 12px 0;\n    }\n\n    .job .job--spacer {\n      display: inline-block;\n      margin: 0 8px;\n    }\n  "]
        })
    ], ScrUserJobComponent);
    return ScrUserJobComponent;
}());
exports.ScrUserJobComponent = ScrUserJobComponent;
//# sourceMappingURL=job.component.js.map