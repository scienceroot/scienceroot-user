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
var user_model_1 = require("../../../core/user.model");
var ScrUserDetailsInfoJobsComponent = /** @class */ (function () {
    function ScrUserDetailsInfoJobsComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserDetailsInfoJobsComponent.prototype, "user", void 0);
    ScrUserDetailsInfoJobsComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-details-info-jobs',
            template: "\n    <div class=\"jobs\">\n      <div class=\"jobs--headline\">\n        <span class=\"mat-headline\">Work experience</span>\n      </div>\n      <ng-container *ngIf=\"user.jobs && user.jobs.length > 0; then jobsList else noJobs;\">\n      </ng-container>\n        \n    </div>\n    \n    <ng-template #noJobs>\n      <span class=\"mat-body-1\">\n        No jobs added yet.\n      </span>\n    </ng-template>\n    \n    <ng-template #jobsList>\n      <ng-container *ngFor=\"let job of user.jobs\">\n        <scr-user-job [job]=\"job\">\n        </scr-user-job>\n      </ng-container>\n    </ng-template>\n  ",
            styles: ["\n    .jobs .jobs--headline mat-icon {\n      margin-right: 16px;\n      width: 24px;\n      height: 24px;\n      font-size: 24px;\n    }\n  "]
        })
    ], ScrUserDetailsInfoJobsComponent);
    return ScrUserDetailsInfoJobsComponent;
}());
exports.ScrUserDetailsInfoJobsComponent = ScrUserDetailsInfoJobsComponent;
//# sourceMappingURL=jobs.component.js.map