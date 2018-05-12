"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_component_1 = require("./new.component");
var material_1 = require("@angular/material");
var type_module_1 = require("./type/type.module");
var flex_layout_1 = require("@angular/flex-layout");
var common_1 = require("@angular/common");
var password_module_1 = require("./password/password.module");
var terms_module_1 = require("./terms/terms.module");
var forms_1 = require("@angular/forms");
__export(require("./new.component"));
var ScrUserNewModule = /** @class */ (function () {
    function ScrUserNewModule() {
    }
    ScrUserNewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatInputModule,
                material_1.MatButtonModule,
                type_module_1.ScrUserNewTypeModule,
                password_module_1.ScrUserNewPasswordModule,
                terms_module_1.ScrUserNewTermsModule
            ],
            declarations: [
                new_component_1.ScrUserNewComponent
            ],
            exports: [
                new_component_1.ScrUserNewComponent
            ],
            providers: []
        })
    ], ScrUserNewModule);
    return ScrUserNewModule;
}());
exports.ScrUserNewModule = ScrUserNewModule;
//# sourceMappingURL=new.module.js.map