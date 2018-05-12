"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_component_1 = require("./add.component");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var industry_module_1 = require("../../../core/industry/industry.module");
var ScrUserEditJobsAddModule = /** @class */ (function () {
    function ScrUserEditJobsAddModule() {
    }
    ScrUserEditJobsAddModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatInputModule,
                material_1.MatButtonModule,
                material_1.MatAutocompleteModule,
                material_1.MatDialogModule,
                industry_module_1.ScrIndustryModule
            ],
            declarations: [
                add_component_1.ScrUserEditJobsAddComponent
            ],
            exports: [
                add_component_1.ScrUserEditJobsAddComponent
            ],
            providers: [],
            entryComponents: [
                add_component_1.ScrUserEditJobsAddComponent
            ]
        })
    ], ScrUserEditJobsAddModule);
    return ScrUserEditJobsAddModule;
}());
exports.ScrUserEditJobsAddModule = ScrUserEditJobsAddModule;
//# sourceMappingURL=add.module.js.map