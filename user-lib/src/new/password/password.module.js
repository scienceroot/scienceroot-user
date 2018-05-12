"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var password_component_1 = require("./password.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var password_confirmation_validator_directive_1 = require("./password-confirmation-validator.directive");
var ScrUserNewPasswordModule = /** @class */ (function () {
    function ScrUserNewPasswordModule() {
    }
    ScrUserNewPasswordModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatInputModule
            ],
            declarations: [
                password_confirmation_validator_directive_1.PasswordConfirmationValidator,
                password_component_1.ScrUserNewPasswordComponent
            ],
            exports: [password_component_1.ScrUserNewPasswordComponent],
            providers: []
        })
    ], ScrUserNewPasswordModule);
    return ScrUserNewPasswordModule;
}());
exports.ScrUserNewPasswordModule = ScrUserNewPasswordModule;
//# sourceMappingURL=password.module.js.map