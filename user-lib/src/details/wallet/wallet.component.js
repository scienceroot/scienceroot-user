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
var router_1 = require("@angular/router");
var ScrUserWalletComponent = /** @class */ (function () {
    function ScrUserWalletComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.user = this.activatedRoute.snapshot.data.user;
    }
    ScrUserWalletComponent.prototype.onWalletCreationFinished = function () {
        location.reload();
    };
    ScrUserWalletComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <scr-user-profile [user]=\"user\">\n      <div>\n        <ng-container *ngIf=\"!!user.publicAddress; then existingWallet else newWallet;\">\n        </ng-container>\n      </div>\n    </scr-user-profile>\n    \n    <ng-template #newWallet>\n      <scr-wallet-new [userId]=\"user.uid\"\n                      (onWalletCreationFinished)=\"onWalletCreationFinished()\">\n      </scr-wallet-new>\n    </ng-template>\n\n    <ng-template #existingWallet>\n      <scr-wallet-show [publicKey]=\"user.publicAddress\">\n      </scr-wallet-show>\n    </ng-template>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ScrUserWalletComponent);
    return ScrUserWalletComponent;
}());
exports.ScrUserWalletComponent = ScrUserWalletComponent;
//# sourceMappingURL=wallet.component.js.map