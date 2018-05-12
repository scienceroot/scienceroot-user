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
var ScrUserDetailsInfoLanguageComponent = /** @class */ (function () {
    function ScrUserDetailsInfoLanguageComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserDetailsInfoLanguageComponent.prototype, "user", void 0);
    ScrUserDetailsInfoLanguageComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-details-info-languages',
            template: "\n    <div>\n      <div class=\"mat-headline\">\n        <span>\n          Languages\n        </span>\n      </div>\n      <div *ngIf=\"user?.languages?.length > 0; else noLanguages\">\n        <mat-chip-list [ngClass.xs]=\"'mat-chip-list-stacked'\">\n          <mat-chip *ngFor=\"let language of user.languages\"\n                    [selected]=\"true\"\n                    color=\"primary\">\n            <span>\n              {{ language.name }}\n            </span>\n          </mat-chip>\n        </mat-chip-list>\n      </div>\n\n      <ng-template #noLanguages>\n      <span class=\"mat-body-1\">\n        No languages added yet.\n      </span>\n      </ng-template>\n    </div>\n  ",
            styles: ["\n  \n  "]
        })
    ], ScrUserDetailsInfoLanguageComponent);
    return ScrUserDetailsInfoLanguageComponent;
}());
exports.ScrUserDetailsInfoLanguageComponent = ScrUserDetailsInfoLanguageComponent;
//# sourceMappingURL=languages.component.js.map