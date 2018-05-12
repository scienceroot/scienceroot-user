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
var forms_1 = require("@angular/forms");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
var ScrUserNewPasswordComponent = /** @class */ (function () {
    function ScrUserNewPasswordComponent() {
        var _this = this;
        this.passwordChange = new core_1.EventEmitter();
        this.passwordConfirmationChange = new Subject_1.Subject();
        this.passwordConfirmationMismatchError = false;
        this.passwordFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.min(6)]);
        this.passwordConfirmationFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.passwordConfirmationChange
            .asObservable()
            .debounceTime(300)
            .subscribe(function (newPassword) {
            _this.passwordConfirmation = newPassword;
            if (_this.passwordConfirmation !== _this.password) {
                _this.passwordConfirmationMismatchError = true;
            }
            else {
                _this.passwordChange.emit(_this.password);
            }
        });
    }
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrUserNewPasswordComponent.prototype, "passwordChange", void 0);
    ScrUserNewPasswordComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-new-password',
            template: "\n    <div  fxLayout=\"row\"\n          fxLayout.xs=\"column\"\n          fxLayoutGap=\"24px\"\n          fxLayoutGap.xs=\"8px\">\n      <div fxFlex=\"\">\n        <mat-form-field>\n          <input  matInput=\"\"\n                  type=\"password\"\n                  [(ngModel)]=\"password\"\n                  [formControl]=\"passwordFormControl\"\n                  placeholder=\"Password\" />\n          <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n            Password is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"passwordFormControl.hasError('min')\">\n            Password to <strong>short</strong>.\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"\">\n        <mat-form-field>\n          <input  matInput=\"\"\n                  type=\"password\"\n                  [ngModel]=\"passwordConfirmation\"\n                  (ngModelChange)=\"passwordConfirmationChange.next($event)\"\n                  [formControl]=\"passwordConfirmationFormControl\"\n                  placeholder=\"Password confirmation\" />\n          <mat-error *ngIf=\"passwordConfirmationFormControl.hasError('required')\">\n            Password confirmation is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"passwordConfirmationMismatchError\">\n            Passwords not equal\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n  ",
            styles: ["\n    mat-form-field, input { width: 100%; }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ScrUserNewPasswordComponent);
    return ScrUserNewPasswordComponent;
}());
exports.ScrUserNewPasswordComponent = ScrUserNewPasswordComponent;
//# sourceMappingURL=password.component.js.map