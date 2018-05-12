"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_component_1 = require("./link.component");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var user_1 = require("user");
var ScrUserLinkDemoModule = /** @class */ (function () {
    function ScrUserLinkDemoModule() {
    }
    ScrUserLinkDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                flex_layout_1.FlexLayoutModule,
                user_1.ScrActiveUserModule,
                router_1.RouterModule.forChild([
                    { path: 'link', component: link_component_1.ScrUserLinkDemoComponent }
                ])
            ],
            declarations: [
                link_component_1.ScrUserLinkDemoComponent
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: []
        })
    ], ScrUserLinkDemoModule);
    return ScrUserLinkDemoModule;
}());
exports.ScrUserLinkDemoModule = ScrUserLinkDemoModule;
//# sourceMappingURL=link.module.js.map