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
var user_model_1 = require("../core/user.model");
var router_1 = require("@angular/router");
var user_service_1 = require("../core/user.service");
var forms_1 = require("@angular/forms");
var ScrUserNewComponent = /** @class */ (function () {
    function ScrUserNewComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new user_model_1.ScrUser();
        this.acceptedTerms = false;
        this.acceptedTermsError = false;
        this.forenameFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.lastnameFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.mailFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
    }
    ScrUserNewComponent.prototype.ngOnInit = function () {
        this.changeRole(user_model_1.SCR_USER_TYPES[0]);
    };
    ScrUserNewComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    ScrUserNewComponent.prototype.save = function () {
        var _this = this;
        console.log('save()');
        this.userService.create(this.user)
            .then(function (user) {
            var routeTo = _this.navigationBasedOnRole(user.uid, user.roles);
            console.log(routeTo);
            _this.router.navigate(routeTo);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    ScrUserNewComponent.prototype.changeRole = function (type) {
        this.user.roles = [];
        this.user.roles.push(type.name);
    };
    ScrUserNewComponent.prototype.isValid = function () {
        return this.user.isValid() && !!this.user.password;
    };
    ScrUserNewComponent.prototype.handleError = function (errorObj) {
        if (errorObj && errorObj.error) {
            this.errorMessage = errorObj.error.message;
        }
    };
    /**
     * Redirect to edit, if role 'journal'
     *
     * @param id
     * @param roles
     * @returns
     */
    ScrUserNewComponent.prototype.navigationBasedOnRole = function (id, roles) {
        var path = ['/user', id, 'info'];
        if (!!roles) {
            if (roles.indexOf('journal') !== -1) {
                path = ['/user', id, 'edit'];
            }
            if (roles.indexOf('investor') !== -1) {
                path = ['/user', id, 'wallet'];
            }
        }
        return path;
    };
    ScrUserNewComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <div class=\"new\">\n      <div class=\"header\">\n      <span class=\"mat-display-1 scr-primary-text\">\n        Create a new account\n      </span>\n      </div>\n\n      <span class=\"error\">{{errorMessage}}</span>\n\n      <div class=\"form\">\n        <div class=\"step\">\n          <scr-user-new-type (typeChange)=\"changeRole($event)\">\n          </scr-user-new-type>\n        </div>\n        <div class=\"step\">\n          <div fxLayout=\"column\"\n               fxLayoutGap=\"24px\">\n            <div fxFlex=\"\">\n        <span class=\"mat-headline\">\n          Personal information\n        </span>\n              <div fxLayout=\"row\"\n                   fxLayout.xs=\"column\"\n                   fxLayoutGap=\"24px\"\n                   fxLayoutGap.xs=\"8px\">\n                <div fxFlex=\"\">\n                  <mat-form-field>\n                    <input matInput=\"\"\n                           [(ngModel)]=\"user.forename\"\n                           [formControl]=\"forenameFormControl\"\n                           placeholder=\"Name\"/>\n                    <mat-error *ngIf=\"forenameFormControl.hasError('required')\">\n                      Name is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </div>\n                <div fxFlex=\"\">\n                  <mat-form-field>\n                    <input matInput=\"\"\n                           [(ngModel)]=\"user.lastname\"\n                           [formControl]=\"lastnameFormControl\"\n                           placeholder=\"Lastname\"/>\n                    <mat-error *ngIf=\"lastnameFormControl.hasError('required')\">\n                      Name is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n            <span class=\"mat-headline\">\n              Credentials\n            </span>\n            <div fxFlex=\"\">\n              <mat-form-field>\n                <input matInput=\"\"\n                       [(ngModel)]=\"user.mail\"\n                       [formControl]=\"mailFormControl\"\n                       placeholder=\"E-Mail\"\n                       type=\"email\"/>\n                <mat-error *ngIf=\"mailFormControl.hasError('required')\">\n                  E-Mail is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"mailFormControl.hasError('email')\">\n                  E-Mail is <strong>invalid</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div>\n              <scr-user-new-password (passwordChange)=\"user.password = $event\">\n              </scr-user-new-password>\n            </div>\n            <div fxFlex=\"\"\n                 class=\"accept-conditions\">\n              <scr-user-new-terms (checkedChange)=\"acceptedTerms = $event\">\n              </scr-user-new-terms>\n              <mat-error *ngIf=\"acceptedTermsError\">\n                You need to agree to our Terms and Conditions\n              </mat-error>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"row\"\n           fxLayoutAlign=\"end center\">\n        <div fxFlex=\"100px\">\n          <button mat-button=\"\"\n                  (click)=\"cancel()\">\n            Cancel\n          </button>\n        </div>\n        <div fxFlex=\"100px\">\n          <button mat-raised-button=\"\"\n                  color=\"accent\"\n                  [disabled]=\"!acceptedTerms\"\n                  (click)=\"save()\">\n            Register\n          </button>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .new {\n      max-width: 700px;\n      margin: auto;\n    }\n\n    .new .header {\n      margin-bottom: 24px;\n    }\n\n    .new .form {\n      margin: 24px 0;\n    }\n\n    .step {\n      margin: 32px 0;\n    }\n\n    mat-form-field, input {\n      width: 100%;\n    }\n\n    .error {\n      color: #F44336;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.ScrUserService])
    ], ScrUserNewComponent);
    return ScrUserNewComponent;
}());
exports.ScrUserNewComponent = ScrUserNewComponent;
//# sourceMappingURL=new.component.js.map