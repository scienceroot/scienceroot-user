"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var type_component_1 = require("./type.component");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var label_component_1 = require("./label.component");
var ScrUserNewTypeModule = /** @class */ (function () {
    function ScrUserNewTypeModule() {
    }
    ScrUserNewTypeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatCheckboxModule,
                material_1.MatIconModule
            ],
            declarations: [
                type_component_1.ScrUserNewTypeComponent,
                label_component_1.ScrUserNewTypeLabelComponent
            ],
            exports: [
                type_component_1.ScrUserNewTypeComponent
            ],
            providers: []
        })
    ], ScrUserNewTypeModule);
    return ScrUserNewTypeModule;
}());
exports.ScrUserNewTypeModule = ScrUserNewTypeModule;
//# sourceMappingURL=type.module.js.map