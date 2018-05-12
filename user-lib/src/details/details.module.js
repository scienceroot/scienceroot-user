"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var followedBy_module_1 = require("./followedBy/followedBy.module");
var follows_module_1 = require("./follows/follows.module");
var info_module_1 = require("./info/info.module");
var newsfeed_module_1 = require("./newsfeed/newsfeed.module");
var wallet_module_1 = require("./wallet/wallet.module");
__export(require("./info/info.module"));
__export(require("./wallet/wallet.module"));
var ScrUserDetailsModule = /** @class */ (function () {
    function ScrUserDetailsModule() {
    }
    ScrUserDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                info_module_1.ScrUserDetailsInfoModule,
                followedBy_module_1.ScrUserDetailsFollowedByModule,
                follows_module_1.ScrUserDetailsFollowsModule,
                wallet_module_1.ScrUserWalletModule,
                newsfeed_module_1.ScrUserDetailsNewsfeedModule
            ],
            declarations: [],
            exports: [],
            providers: []
        })
    ], ScrUserDetailsModule);
    return ScrUserDetailsModule;
}());
exports.ScrUserDetailsModule = ScrUserDetailsModule;
//# sourceMappingURL=details.module.js.map