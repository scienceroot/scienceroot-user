"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_container_component_1 = require("./link-container.component");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var login_module_1 = require("./login/login.module");
var menu_module_1 = require("./menu/menu.module");
var active_module_1 = require("../../active/active.module");
var ScrUserDetailsLinkModule = /** @class */ (function () {
    function ScrUserDetailsLinkModule() {
    }
    ScrUserDetailsLinkModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                active_module_1.ScrActiveUserModule,
                login_module_1.ScrUserDetailsLinkLoginModule,
                menu_module_1.ScrUserDetailsLinkMenuModule
            ],
            declarations: [
                link_container_component_1.ScrUserDetailsLinkContainerComponent
            ],
            exports: [
                link_container_component_1.ScrUserDetailsLinkContainerComponent
            ],
            providers: []
        })
    ], ScrUserDetailsLinkModule);
    return ScrUserDetailsLinkModule;
}());
exports.ScrUserDetailsLinkModule = ScrUserDetailsLinkModule;
//# sourceMappingURL=link.module.js.map