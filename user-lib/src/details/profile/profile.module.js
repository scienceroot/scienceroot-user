"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var profile_component_1 = require("./profile.component");
var header_module_1 = require("./header/header.module");
var menu_module_1 = require("./menu/menu.module");
var ScrUserProfileModule = /** @class */ (function () {
    function ScrUserProfileModule() {
    }
    ScrUserProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                header_module_1.ScrUserProfileHeaderModule,
                menu_module_1.ScrUserProfileMenuModule
            ],
            declarations: [
                profile_component_1.ScrUserProfileComponent
            ],
            exports: [
                profile_component_1.ScrUserProfileComponent
            ],
            providers: []
        })
    ], ScrUserProfileModule);
    return ScrUserProfileModule;
}());
exports.ScrUserProfileModule = ScrUserProfileModule;
//# sourceMappingURL=profile.module.js.map