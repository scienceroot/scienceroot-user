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
var ScrUserDetailsLinkMenuComponent = /** @class */ (function () {
    function ScrUserDetailsLinkMenuComponent() {
    }
    ScrUserDetailsLinkMenuComponent.prototype.logout = function () {
        localStorage.clear();
        location.reload();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserDetailsLinkMenuComponent.prototype, "activeUser", void 0);
    ScrUserDetailsLinkMenuComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-details-link-menu',
            template: "\n    <div  fxLayout=\"row\"\n          fxLayoutAlign=\"center center\"\n          class=\"user-details-link-menu\">\n      <div fxFlex=\"48px\">\n        <button mat-icon-button\n                color=\"accent\"\n                [matMenuTriggerFor]=\"menu\">\n          <mat-icon>\n            account_circle\n          </mat-icon>\n        </button>\n      </div>\n    </div>\n\n    <mat-menu #menu=\"matMenu\">\n      <a  mat-menu-item\n          [routerLink]=\"['/user', activeUser.uid, 'info']\">\n        <mat-icon>\n          home\n        </mat-icon>\n        <span>Your profile</span>\n      </a>\n      <a  mat-menu-item\n          [routerLink]=\"['/user', activeUser.uid, 'edit']\">\n        <mat-icon>\n          edit\n        </mat-icon>\n        <span>Edit profile</span>\n      </a>\n      <button mat-menu-item\n              [routerLink]=\"['/user', activeUser.uid, 'wallet']\">\n        <mat-icon>\n          account_balance_wallet\n        </mat-icon>\n        <span>Wallet</span>\n      </button>\n      <button mat-menu-item (click)=\"logout()\">\n        <mat-icon>\n          close\n        </mat-icon>\n        <span>Logout</span>\n      </button>\n    </mat-menu>\n  ",
            styles: ["\n    .user-details-link-menu {\n      height: 64px;\n    }\n\n    .user-details-link-menu button,\n    .user-details-link-menu mat-icon {\n      height: 48px;\n      width: 48px;\n      line-height: 48px;\n    }\n\n    .user-details-link-menu button {\n      background-color: #fff;\n    }\n\n    .user-details-link-menu button /deep/ span {\n      display: block;\n      height: 48px;\n    }\n\n    .user-details-link-menu mat-icon {\n      font-size: 48px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ScrUserDetailsLinkMenuComponent);
    return ScrUserDetailsLinkMenuComponent;
}());
exports.ScrUserDetailsLinkMenuComponent = ScrUserDetailsLinkMenuComponent;
//# sourceMappingURL=menu.component.js.map