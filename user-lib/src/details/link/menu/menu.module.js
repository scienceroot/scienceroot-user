"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menu_component_1 = require("./menu.component");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ScrUserDetailsLinkMenuModule = /** @class */ (function () {
    function ScrUserDetailsLinkMenuModule() {
    }
    ScrUserDetailsLinkMenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                material_1.MatButtonModule
            ],
            declarations: [
                menu_component_1.ScrUserDetailsLinkMenuComponent
            ],
            exports: [
                menu_component_1.ScrUserDetailsLinkMenuComponent
            ],
            providers: []
        })
    ], ScrUserDetailsLinkMenuModule);
    return ScrUserDetailsLinkMenuModule;
}());
exports.ScrUserDetailsLinkMenuModule = ScrUserDetailsLinkMenuModule;
//# sourceMappingURL=menu.module.js.map