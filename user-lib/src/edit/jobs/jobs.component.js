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
var material_1 = require("@angular/material");
var add_component_1 = require("./add/add.component");
var user_service_1 = require("../../core/user.service");
var ScrUserEditJobsComponent = /** @class */ (function () {
    function ScrUserEditJobsComponent(dialog, _userService) {
        this.dialog = dialog;
        this._userService = _userService;
        this.jobsChange = new core_1.EventEmitter();
    }
    ScrUserEditJobsComponent.prototype.showAdd = function () {
        var _this = this;
        var config = new material_1.MatDialogConfig();
        this.dialogRef = this.dialog.open(add_component_1.ScrUserEditJobsAddComponent, config);
        this.dialogRef.afterClosed().subscribe(function (job) {
            if (!!job) {
                _this._userService
                    .addJob(job)
                    .then(function (user) { return _this.jobs = user.jobs; });
            }
        });
    };
    ScrUserEditJobsComponent.prototype.deleteJob = function (jobToRemove) {
        var _this = this;
        this._userService.removeJob(jobToRemove)
            .then(function () {
            var index = _this.jobs.findIndex(function (job) { return job.id === jobToRemove.id; });
            if (index > -1) {
                _this.jobs.splice(index, 1);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ScrUserEditJobsComponent.prototype, "jobs", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrUserEditJobsComponent.prototype, "jobsChange", void 0);
    ScrUserEditJobsComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-edit-jobs',
            template: "\n    <div>\n      <div class=\"jobs--headline\">\n        <span class=\"mat-headline\">Jobs</span>\n      </div>\n      <ng-container *ngIf=\"jobs && jobs.length > 0; then jobsList else noJobs;\">\n      </ng-container>\n      <div class=\"jobs--actions\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"64px\">\n            <button mat-button=\"\"\n                    (click)=\"showAdd()\"\n                    color=\"accent\">\n              <mat-icon>add</mat-icon>\n              <span>Add Job</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #noJobs>\n      <span class=\"mat-body-1\">\n        No jobs added yet.\n      </span>\n    </ng-template>\n\n    <ng-template #jobsList>\n      <ng-container *ngFor=\"let job of jobs\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"\">\n            <scr-user-job [job]=\"job\">\n            </scr-user-job>\n          </div>\n          <div fxFlex=\"40px\">\n            <button mat-icon-button=\"\"\n                    color=\"accent\"\n                    (click)=\"deleteJob(job)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n    </ng-template>\n  ",
            styles: ["\n    .jobs--actions { padding: 12px 0; }\n  "]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            user_service_1.ScrUserService])
    ], ScrUserEditJobsComponent);
    return ScrUserEditJobsComponent;
}());
exports.ScrUserEditJobsComponent = ScrUserEditJobsComponent;
//# sourceMappingURL=jobs.component.js.map