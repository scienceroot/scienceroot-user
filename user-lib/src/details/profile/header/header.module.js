"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var follower_module_1 = require("../../../core/follower/follower.module");
var header_component_1 = require("./header.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ScrUserProfileHeaderModule = /** @class */ (function () {
    function ScrUserProfileHeaderModule() {
    }
    ScrUserProfileHeaderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                follower_module_1.ScrUserFollowModule,
            ],
            declarations: [
                header_component_1.ScrUserProfileHeaderComponent
            ],
            exports: [
                header_component_1.ScrUserProfileHeaderComponent
            ],
            providers: []
        })
    ], ScrUserProfileHeaderModule);
    return ScrUserProfileHeaderModule;
}());
exports.ScrUserProfileHeaderModule = ScrUserProfileHeaderModule;
//# sourceMappingURL=header.module.js.map