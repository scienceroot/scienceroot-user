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
var language_model_1 = require("../../../core/language/language.model");
var forms_1 = require("@angular/forms");
var language_service_1 = require("../../../core/language/language.service");
var material_1 = require("@angular/material");
var operators_1 = require("rxjs/operators");
var ScrUserEditLanguagesAddComponent = /** @class */ (function () {
    function ScrUserEditLanguagesAddComponent(languageService, dialogRef) {
        var _this = this;
        this.languageService = languageService;
        this.dialogRef = dialogRef;
        this.languageCtrl = new forms_1.FormControl();
        this.languageCtrl.valueChanges
            .pipe(operators_1.debounceTime(200))
            .subscribe(function (query) { return _this.languageOptions = _this.languageService.get(query); });
    }
    ScrUserEditLanguagesAddComponent.prototype.displayLanguage = function (language) {
        if (language === void 0) { language = new language_model_1.ScrUserLanguage(); }
        if (!!language) {
            return language.name;
        }
        else {
            return null;
        }
    };
    ScrUserEditLanguagesAddComponent.prototype.selectedLanguage = function (event) {
        this.language = event.option.value;
    };
    ScrUserEditLanguagesAddComponent.prototype.submit = function () {
        if (!!this.language) {
            this.dialogRef.close(this.language);
        }
    };
    ScrUserEditLanguagesAddComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <div>\n      <div class=\"header\">\n        <span class=\"mat-headline\">Add a language</span>\n      </div>\n      <div>\n        <mat-form-field>\n          <input placeholder=\"Language\"\n                 aria-label=\"Language\"\n                 matInput\n                 [formControl]=\"languageCtrl\"\n                 [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\"\n                            [displayWith]=\"displayLanguage\"\n                            (optionSelected)=\"selectedLanguage($event)\">\n            <mat-option *ngFor=\"let option of languageOptions | async\"\n                        [value]=\"option\">\n              {{ option.name }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"actions\">\n        <div  fxLayout=\"row\"\n              fxLayoutAlign=\"end\">\n          <div  fxFlex=\"100px\">\n            <button mat-button=\"\"\n                    (click)=\"dialogRef.close()\">\n              Cancel\n            </button>\n          </div>\n          <div  fxFlex=\"100px\">\n            <button mat-raised-button=\"\"\n                    color=\"accent\"\n                    (click)=\"submit()\">\n              Save\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .header { margin-bottom: 24px; }\n    .actions { padding: 24px 0 0 0; }\n\n    mat-form-field, input { width: 100%; }\n  "]
        }),
        __metadata("design:paramtypes", [language_service_1.ScrUserLanguageService,
            material_1.MatDialogRef])
    ], ScrUserEditLanguagesAddComponent);
    return ScrUserEditLanguagesAddComponent;
}());
exports.ScrUserEditLanguagesAddComponent = ScrUserEditLanguagesAddComponent;
//# sourceMappingURL=add.component.js.map