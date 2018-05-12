"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_module_1 = require("./add/add.module");
var languages_component_1 = require("./languages.component");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var common_1 = require("@angular/common");
var language_module_1 = require("../../core/language/language.module");
var ScrUserEditLanguagesModule = /** @class */ (function () {
    function ScrUserEditLanguagesModule() {
    }
    ScrUserEditLanguagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                add_module_1.ScrUserEditLanguagesAddModule,
                language_module_1.ScrUserLanguageModule
            ],
            declarations: [
                languages_component_1.ScrUserEditLanguagesComponent
            ],
            exports: [
                languages_component_1.ScrUserEditLanguagesComponent
            ],
            providers: []
        })
    ], ScrUserEditLanguagesModule);
    return ScrUserEditLanguagesModule;
}());
exports.ScrUserEditLanguagesModule = ScrUserEditLanguagesModule;
//# sourceMappingURL=languages.module.js.map