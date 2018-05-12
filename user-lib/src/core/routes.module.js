"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var active_user_resolver_1 = require("../active/active-user.resolver");
var active_module_1 = require("../active/active.module");
var followedBy_component_1 = require("../details/followedBy/followedBy.component");
var follows_component_1 = require("../details/follows/follows.component");
var newsfeed_component_1 = require("../details/newsfeed/newsfeed.component");
var newsfeed_module_1 = require("../details/newsfeed/newsfeed.module");
var new_component_1 = require("../new/new.component");
var core_module_1 = require("./core.module");
var terms_component_1 = require("../terms/terms.component");
var terms_module_1 = require("../terms/terms.module");
var user_resolver_1 = require("./user.resolver");
var info_component_1 = require("../details/info/info.component");
var details_module_1 = require("../details/details.module");
var security_1 = require("@scienceroot/security");
var edit_component_1 = require("../edit/edit.component");
var edit_module_1 = require("../edit/edit.module");
var wallet_component_1 = require("../details/wallet/wallet.component");
var USER_ROUTES = [
    {
        path: 'register',
        redirectTo: 'user/new'
    },
    { path: 'login',
        component: security_1.ScrAuthenticationLoginComponent
    },
    {
        path: 'user',
        children: [
            {
                path: 'new',
                component: new_component_1.ScrUserNewComponent
            },
            {
                path: 'terms',
                component: terms_component_1.ScrTermsAndConditionsComponent
            },
            {
                path: 'me',
                canActivate: [security_1.ScrAuthenticationGuard],
                resolve: {
                    user: active_user_resolver_1.ScrActiveUserResolver
                },
                component: info_component_1.ScrUserDetailsInfoComponent
            },
            {
                path: ':userId',
                children: [
                    {
                        path: 'info',
                        canActivate: [security_1.ScrAuthenticationGuard],
                        resolve: {
                            user: user_resolver_1.ScrUserResolver
                        },
                        component: info_component_1.ScrUserDetailsInfoComponent
                    },
                    {
                        path: 'followers',
                        canActivate: [security_1.ScrAuthenticationGuard],
                        resolve: {
                            user: user_resolver_1.ScrUserResolver
                        },
                        component: followedBy_component_1.ScrUserDetailsFollowedByComponent
                    },
                    {
                        path: 'followedBy',
                        canActivate: [security_1.ScrAuthenticationGuard],
                        resolve: {
                            user: user_resolver_1.ScrUserResolver
                        },
                        component: follows_component_1.ScrUserDetailsFollowsComponent
                    },
                    {
                        path: 'newsfeed',
                        canActivate: [security_1.ScrAuthenticationGuard],
                        resolve: {
                            user: user_resolver_1.ScrUserResolver
                        },
                        component: newsfeed_component_1.ScrUserDetailsNewsfeedComponent
                    },
                    {
                        path: 'wallet',
                        canActivate: [security_1.ScrAuthenticationGuard],
                        resolve: {
                            user: user_resolver_1.ScrUserResolver
                        },
                        component: wallet_component_1.ScrUserWalletComponent
                    },
                    {
                        path: 'edit',
                        canActivate: [security_1.ScrAuthenticationGuard],
                        resolve: {
                            user: user_resolver_1.ScrUserResolver
                        },
                        component: edit_component_1.ScrUserEditComponent
                    }
                ]
            }
        ]
    }
];
var ScrUserRoutesModule = /** @class */ (function () {
    function ScrUserRoutesModule() {
    }
    ScrUserRoutesModule = __decorate([
        core_1.NgModule({
            imports: [
                security_1.ScrAuthenticationModule,
                core_module_1.ScrUserCoreModule,
                active_module_1.ScrActiveUserModule,
                details_module_1.ScrUserDetailsModule,
                edit_module_1.ScrUserEditModule,
                newsfeed_module_1.ScrUserDetailsNewsfeedModule,
                terms_module_1.ScrTermsAndConditionsModule,
                router_1.RouterModule.forChild(USER_ROUTES)
            ],
            declarations: [],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                user_resolver_1.ScrUserResolver
            ]
        })
    ], ScrUserRoutesModule);
    return ScrUserRoutesModule;
}());
exports.ScrUserRoutesModule = ScrUserRoutesModule;
//# sourceMappingURL=routes.module.js.map