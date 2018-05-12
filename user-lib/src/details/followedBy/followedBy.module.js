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
var design_1 = require("@scienceroot/design");
var follower_module_1 = require("../../core/follower/follower.module");
var profile_module_1 = require("../profile/profile.module");
var followedBy_component_1 = require("./followedBy.component");
var ScrUserDetailsFollowedByModule = /** @class */ (function () {
    function ScrUserDetailsFollowedByModule() {
    }
    ScrUserDetailsFollowedByModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                design_1.ScrLoadingModule,
                follower_module_1.ScrUserFollowModule,
                profile_module_1.ScrUserProfileModule
            ],
            declarations: [
                followedBy_component_1.ScrUserDetailsFollowedByComponent
            ],
            exports: [
                followedBy_component_1.ScrUserDetailsFollowedByComponent
            ],
            providers: []
        })
    ], ScrUserDetailsFollowedByModule);
    return ScrUserDetailsFollowedByModule;
}());
exports.ScrUserDetailsFollowedByModule = ScrUserDetailsFollowedByModule;
//# sourceMappingURL=followedBy.module.js.map