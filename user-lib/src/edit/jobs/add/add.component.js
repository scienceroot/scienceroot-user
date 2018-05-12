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
var job_model_1 = require("../../../core/job/job.model");
var industry_model_1 = require("../../../core/industry/industry.model");
require("rxjs/add/operator/debounceTime");
var industry_service_1 = require("../../../core/industry/industry.service");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var ScrUserEditJobsAddComponent = /** @class */ (function () {
    function ScrUserEditJobsAddComponent(industryService, dialogRef) {
        var _this = this;
        this.industryService = industryService;
        this.dialogRef = dialogRef;
        this.newJob = new job_model_1.ScrUserJob();
        this.industryCtr = new forms_1.FormControl();
        this.industry = new industry_model_1.ScrUserIndustry();
        this.industryCtr.valueChanges
            .debounceTime(200)
            .subscribe(function (query) { return _this.industryOptions = _this.industryService.get(query); });
    }
    ScrUserEditJobsAddComponent.prototype.displayIndustry = function (industry) {
        if (industry === void 0) { industry = new industry_model_1.ScrUserIndustry(); }
        if (!!industry) {
            return industry.name;
        }
        else {
            return null;
        }
    };
    ScrUserEditJobsAddComponent.prototype.selectedIndustry = function (event) {
        this.industry = event.option.value;
    };
    ScrUserEditJobsAddComponent.prototype.submit = function () {
        if (!!this.industry) {
            this.newJob.industry = this.industry;
            this.dialogRef.close(this.newJob);
        }
    };
    ScrUserEditJobsAddComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <div>\n      <div class=\"header\">\n        <span class=\"mat-headline\">Add a job</span>\n      </div>\n      <span class=\"mat-title\">Info</span>\n      <div  fxLayout=\"row\"\n            fxLayoutGap=\"24px\">\n        <div fxFlex=\"\">\n          <mat-form-field>\n            <input  matInput=\"\"\n                    [(ngModel)]=\"newJob.title\"\n                    placeholder=\"Job Title\"/>\n          </mat-form-field>\n        </div>\n        <div fxFlex=\"\">\n          <mat-form-field>\n            <input  matInput=\"\"\n                    [(ngModel)]=\"newJob.employer\"\n                    placeholder=\"Employer\"/>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <mat-form-field>\n          <input type=\"search\" \n                 placeholder=\"Industry\" \n                 aria-label=\"Industry\" \n                 matInput\n                 [formControl]=\"industryCtr\"\n                 [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\"\n                            [displayWith]=\"displayIndustry\"\n                            (optionSelected)=\"selectedIndustry($event)\">\n            <mat-option *ngFor=\"let option of industryOptions | async\" \n                        [value]=\"option\">\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <span class=\"mat-title\">Timespan</span>\n      <div  fxLayout=\"row\"\n            fxLayoutGap=\"24px\">\n        <div fxFlex=\"\"\n             fxFlexAlign=\"center\">\n          <span class=\"mat-subheading\">From</span>\n        </div>\n        <div fxFlex=\"\">\n          <mat-form-field>\n            <input  matInput=\"\"\n                    type=\"number\"\n                    [(ngModel)]=\"newJob.startMonth\"\n                    placeholder=\"Month\"\n                    min=\"1\"\n                    max=\"12\"/>\n          </mat-form-field>\n        </div>\n        <div fxFlex=\"\">\n          <mat-form-field>\n            <input  matInput=\"\"\n                    type=\"number\"\n                    min=\"1900\"\n                    step=\"1\"\n                    [(ngModel)]=\"newJob.startYear\"\n                    placeholder=\"Year\"/>\n          </mat-form-field>\n        </div>\n      </div>\n      <div  fxLayout=\"row\"\n            fxLayoutGap=\"24px\">\n        <div  fxFlex=\"\"\n              fxFlexAlign=\"center\">\n          <span class=\"mat-subheading\">To</span>\n        </div>\n        <div fxFlex=\"\">\n          <mat-form-field>\n            <input  matInput=\"\"\n                    type=\"number\"\n                    [(ngModel)]=\"newJob.endMonth\"\n                    placeholder=\"Month\"\n                    min=\"1\"\n                    max=\"12\"/>\n          </mat-form-field>\n        </div>\n        <div fxFlex=\"\">\n          <mat-form-field>\n            <input  matInput=\"\"\n                    type=\"number\"\n                    min=\"1900\"\n                    step=\"1\"\n                    [(ngModel)]=\"newJob.endYear\"\n                    placeholder=\"Year\"/>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div  fxLayout=\"row\"\n              fxLayoutAlign=\"end\">\n          <div  fxFlex=\"100px\">\n            <button mat-button=\"\"\n                    (click)=\"dialogRef.close()\">\n              Cancel\n            </button>\n          </div>\n          <div  fxFlex=\"100px\">\n            <button mat-raised-button=\"\"\n                    color=\"accent\"\n                    (click)=\"submit()\">\n              Save\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .header { margin-bottom: 24px; }\n    .actions { padding: 24px 0 0 0; }\n    \n    mat-form-field, input { width: 100%; }\n  "]
        }),
        __metadata("design:paramtypes", [industry_service_1.ScrIndustryService,
            material_1.MatDialogRef])
    ], ScrUserEditJobsAddComponent);
    return ScrUserEditJobsAddComponent;
}());
exports.ScrUserEditJobsAddComponent = ScrUserEditJobsAddComponent;
//# sourceMappingURL=add.component.js.map