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
var user_model_1 = require("../../core/user.model");
var ScrUserEditWalletInfoComponent = /** @class */ (function () {
    function ScrUserEditWalletInfoComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserEditWalletInfoComponent.prototype, "user", void 0);
    ScrUserEditWalletInfoComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-edit-wallet-info',
            template: "\n    <ng-container *ngIf=\"!user.publicAddress\">\n      <div class=\"container\">\n        <div fxLayout=\"row\">\n          <div  fxFlex=\"64px\"\n                fxFlexAlign=\"center\">\n            <mat-icon class=\"scr-primary-text\">account_balance_wallet</mat-icon>\n          </div>\n          <div fxFlex=\"\"\n               fxFlexAlign=\"center\">\n            <p class=\"scr-primary-text\">\n              You haven't added a wallet to your account yet.\n            </p>\n          </div>\n          <div fxFlex=\"100px\"\n               fxFlexAlign=\"center\">\n            <a mat-button=\"\"\n               color=\"accent\"\n               [routerLink]=\"['/user', user.uid, 'wallet']\">\n              Add wallet\n            </a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  ",
            styles: ["\n    .container {\n      border: 2px solid #2196F3;\n      border-radius: 2px;\n      padding: 24px;\n    }\n  "]
        })
    ], ScrUserEditWalletInfoComponent);
    return ScrUserEditWalletInfoComponent;
}());
exports.ScrUserEditWalletInfoComponent = ScrUserEditWalletInfoComponent;
//# sourceMappingURL=wallet-info.component.js.map