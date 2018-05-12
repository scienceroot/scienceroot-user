"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var contact_module_1 = require("../../core/contact/contact.module");
var edit_component_1 = require("./edit.component");
var ScrUserContactEditModule = /** @class */ (function () {
    function ScrUserContactEditModule() {
    }
    ScrUserContactEditModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatInputModule,
                material_1.MatButtonModule,
                contact_module_1.ScrUserContactModule
            ],
            declarations: [
                edit_component_1.ScrUserContactEditComponent
            ],
            exports: [
                edit_component_1.ScrUserContactEditComponent
            ],
            providers: []
        })
    ], ScrUserContactEditModule);
    return ScrUserContactEditModule;
}());
exports.ScrUserContactEditModule = ScrUserContactEditModule;
//# sourceMappingURL=edit.module.js.map