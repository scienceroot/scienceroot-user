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
var add_component_1 = require("./add/add.component");
var material_1 = require("@angular/material");
var user_service_1 = require("../../core/user.service");
var ScrUserEditLanguagesComponent = /** @class */ (function () {
    function ScrUserEditLanguagesComponent(dialog, _userService) {
        this.dialog = dialog;
        this._userService = _userService;
        this.languagesChanged = new core_1.EventEmitter();
    }
    ScrUserEditLanguagesComponent.prototype.showAdd = function () {
        var _this = this;
        var config = new material_1.MatDialogConfig();
        this.dialogRef = this.dialog.open(add_component_1.ScrUserEditLanguagesAddComponent, config);
        this.dialogRef.afterClosed().subscribe(function (language) {
            if (!!language) {
                _this._userService
                    .addLanguage(language)
                    .then(function (user) { return _this.languages = user.languages; });
            }
        });
    };
    ScrUserEditLanguagesComponent.prototype.deleteLanguage = function (languageToDelete) {
        var _this = this;
        this._userService.removeLanguage(languageToDelete)
            .then(function () {
            var index = _this.languages.findIndex(function (language) { return language.id === languageToDelete.id; });
            if (index > -1) {
                _this.languages.splice(index, 1);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ScrUserEditLanguagesComponent.prototype, "languages", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrUserEditLanguagesComponent.prototype, "languagesChanged", void 0);
    ScrUserEditLanguagesComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-edit-languages',
            template: "\n    <div>\n      <div class=\"languages--headline\">\n        <span class=\"mat-headline\">Languages</span>\n      </div>\n      <ng-container *ngIf=\"languages && languages.length > 0; then languagesList else noLanguages;\">\n      </ng-container>\n      <div class=\"languages--actions\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"64px\">\n            <button mat-button=\"\"\n                    (click)=\"showAdd()\"\n                    color=\"accent\">\n              <mat-icon>add</mat-icon>\n              <span>Add Language</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #noLanguages>\n      <span class=\"mat-body-1\">\n        No languages added yet.\n      </span>\n    </ng-template>\n\n    <ng-template #languagesList>\n      <ng-container *ngFor=\"let language of languages\">\n        <div fxLayout=\"row\">\n          <div  fxFlex=\"\"\n                class=\"language\">\n            <span class=\"mat-title scr-primary-text\">{{ language.name }}</span>\n          </div>\n          <div fxFlex=\"40px\">\n            <button mat-icon-button=\"\"\n                    color=\"accent\"\n                    (click)=\"deleteLanguage(language)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n    </ng-template>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            user_service_1.ScrUserService])
    ], ScrUserEditLanguagesComponent);
    return ScrUserEditLanguagesComponent;
}());
exports.ScrUserEditLanguagesComponent = ScrUserEditLanguagesComponent;
//# sourceMappingURL=languages.component.js.map