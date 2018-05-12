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
require("rxjs/add/operator/debounceTime");
var material_1 = require("@angular/material");
var interest_model_1 = require("../../../core/interest/interest.model");
var interest_service_1 = require("../../../core/interest/interest.service");
var forms_1 = require("@angular/forms");
var ScrUserEditInterestsAddComponent = /** @class */ (function () {
    function ScrUserEditInterestsAddComponent(interestService, dialogRef) {
        var _this = this;
        this.interestService = interestService;
        this.dialogRef = dialogRef;
        this.interestCtrl = new forms_1.FormControl();
        this.interestCtrl.valueChanges
            .debounceTime(200)
            .subscribe(function (query) { return _this.interestOptions = _this.interestService.get(query); });
    }
    ScrUserEditInterestsAddComponent.prototype.displayInterest = function (interest) {
        if (interest === void 0) { interest = new interest_model_1.ScrUserFieldOfInterest(); }
        if (!!interest) {
            return interest.name;
        }
        else {
            return null;
        }
    };
    ScrUserEditInterestsAddComponent.prototype.selectedInterest = function (event) {
        this.interest = event.option.value;
    };
    ScrUserEditInterestsAddComponent.prototype.submit = function () {
        if (!!this.interest) {
            this.dialogRef.close(this.interest);
        }
    };
    ScrUserEditInterestsAddComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <div>\n      <div class=\"header\">\n        <span class=\"mat-headline\">Add a interest</span>\n      </div>\n      <div>\n        <mat-form-field>\n          <input type=\"text\" placeholder=\"Interest\" \n                 aria-label=\"Interest\" \n                 matInput\n                 [formControl]=\"interestCtrl\"\n                 [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\"\n                            [displayWith]=\"displayInterest\"\n                            (optionSelected)=\"selectedInterest($event)\">\n            <mat-option *ngFor=\"let option of interestOptions | async\" \n                        [value]=\"option\">\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"actions\">\n        <div  fxLayout=\"row\"\n              fxLayoutAlign=\"end\">\n          <div  fxFlex=\"100px\">\n            <button mat-button=\"\"\n                    (click)=\"dialogRef.close()\">\n              Cancel\n            </button>\n          </div>\n          <div  fxFlex=\"100px\">\n            <button mat-raised-button=\"\"\n                    color=\"accent\"\n                    (click)=\"submit()\">\n              Save\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .header { margin-bottom: 24px; }\n    .actions { padding: 24px 0 0 0; }\n    \n    mat-form-field, input { width: 100%; }\n  "]
        }),
        __metadata("design:paramtypes", [interest_service_1.ScrUserFieldOfInterestService,
            material_1.MatDialogRef])
    ], ScrUserEditInterestsAddComponent);
    return ScrUserEditInterestsAddComponent;
}());
exports.ScrUserEditInterestsAddComponent = ScrUserEditInterestsAddComponent;
//# sourceMappingURL=add.component.js.map