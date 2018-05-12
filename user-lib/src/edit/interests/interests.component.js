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
var ScrUserEditInterestsComponent = /** @class */ (function () {
    function ScrUserEditInterestsComponent(dialog, _userService) {
        this.dialog = dialog;
        this._userService = _userService;
        this.interestsChanged = new core_1.EventEmitter();
    }
    ScrUserEditInterestsComponent.prototype.showAdd = function () {
        var _this = this;
        var config = new material_1.MatDialogConfig();
        this.dialogRef = this.dialog.open(add_component_1.ScrUserEditInterestsAddComponent, config);
        this.dialogRef.afterClosed().subscribe(function (interest) {
            if (!!interest) {
                _this._userService
                    .addInterest(interest)
                    .then(function (user) { return _this.interests = user.interests; });
            }
        });
    };
    ScrUserEditInterestsComponent.prototype.deleteInterest = function (interestToRemove) {
        var _this = this;
        this._userService.removeInterest(interestToRemove)
            .then(function () {
            var index = _this.interests.findIndex(function (interest) { return interest.id === interestToRemove.id; });
            if (index > -1) {
                _this.interests.splice(index, 1);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ScrUserEditInterestsComponent.prototype, "interests", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrUserEditInterestsComponent.prototype, "interestsChanged", void 0);
    ScrUserEditInterestsComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-edit-interests',
            template: "\n    <div>\n      <div class=\"interests--headline\">\n        <span class=\"mat-headline\">Interests</span>\n      </div>\n      <ng-container *ngIf=\"interests && interests.length > 0; then interestsList else noInterests;\">\n      </ng-container>\n      <div class=\"interests--actions\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"64px\">\n            <button mat-button=\"\"\n                    (click)=\"showAdd()\"\n                    color=\"accent\">\n              <mat-icon>add</mat-icon>\n              <span>Add Interest</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #noInterests>\n      <span class=\"mat-body-1\">\n        No interests added yet.\n      </span>\n    </ng-template>\n\n    <ng-template #interestsList>\n      <ng-container *ngFor=\"let interest of interests\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"\"\n               class=\"interest\">\n            <span class=\"mat-title scr-primary-text\">{{ interest.name }}</span>\n          </div>\n          <div fxFlex=\"40px\">\n            <button mat-icon-button=\"\"\n                    color=\"accent\"\n                    (click)=\"deleteInterest(interest)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n    </ng-template>\n  ",
            styles: ["\n    .interests--actions { padding: 12px 0; }\n  "]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            user_service_1.ScrUserService])
    ], ScrUserEditInterestsComponent);
    return ScrUserEditInterestsComponent;
}());
exports.ScrUserEditInterestsComponent = ScrUserEditInterestsComponent;
//# sourceMappingURL=interests.component.js.map