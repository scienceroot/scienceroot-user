"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("../../../core/user.model");
var ScrUserProfileMenuComponent = /** @class */ (function () {
    function ScrUserProfileMenuComponent() {
    }
    ScrUserProfileMenuComponent.prototype.ngOnInit = function () {
        this.links = [
            {
                displayName: 'Information',
                path: ['/user', this.user.uid, 'info']
            },
            {
                displayName: 'Newsfeed',
                path: ['/user', this.user.uid, 'newsfeed']
            },
            {
                displayName: 'Follows',
                path: ['/user', this.user.uid, 'followedBy']
            },
            {
                displayName: 'Followers',
                path: ['/user', this.user.uid, 'followers']
            },
            {
                displayName: 'Wallet',
                path: ['/user', this.user.uid, 'wallet']
            }
        ];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserProfileMenuComponent.prototype, "user", void 0);
    ScrUserProfileMenuComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-profile-menu',
            template: "\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of links\"\n         [routerLink]=\"link.path\"\n         routerLinkActive \n         #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.displayName}}\n      </a>\n    </nav>\n  ",
            styles: ["\n  \n  "]
        })
    ], ScrUserProfileMenuComponent);
    return ScrUserProfileMenuComponent;
}());
exports.ScrUserProfileMenuComponent = ScrUserProfileMenuComponent;
//# sourceMappingURL=menu.component.js.map