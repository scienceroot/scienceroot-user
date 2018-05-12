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
var router_1 = require("@angular/router");
var feed_1 = require("@scienceroot/feed");
var active_module_1 = require("../../active/active.module");
var profile_module_1 = require("../profile/profile.module");
var newsfeed_component_1 = require("./newsfeed.component");
var ScrUserDetailsNewsfeedModule = /** @class */ (function () {
    function ScrUserDetailsNewsfeedModule() {
    }
    ScrUserDetailsNewsfeedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                feed_1.ScrFeedUserModule,
                active_module_1.ScrActiveUserModule,
                profile_module_1.ScrUserProfileModule,
            ],
            declarations: [
                newsfeed_component_1.ScrUserDetailsNewsfeedComponent
            ],
            exports: [
                newsfeed_component_1.ScrUserDetailsNewsfeedComponent
            ],
            providers: []
        })
    ], ScrUserDetailsNewsfeedModule);
    return ScrUserDetailsNewsfeedModule;
}());
exports.ScrUserDetailsNewsfeedModule = ScrUserDetailsNewsfeedModule;
//# sourceMappingURL=newsfeed.module.js.map