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
var material_1 = require("@angular/material");
var follow_btn_component_1 = require("./follow-btn.component");
var follower_service_1 = require("./follower.service");
var ScrUserFollowModule = /** @class */ (function () {
    function ScrUserFollowModule() {
    }
    ScrUserFollowModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule
            ],
            declarations: [
                follow_btn_component_1.ScrUserFollowButtonComponent
            ],
            exports: [
                follow_btn_component_1.ScrUserFollowButtonComponent
            ],
            providers: [
                follower_service_1.ScrUserFollowerService
            ]
        })
    ], ScrUserFollowModule);
    return ScrUserFollowModule;
}());
exports.ScrUserFollowModule = ScrUserFollowModule;
//# sourceMappingURL=follower.module.js.map