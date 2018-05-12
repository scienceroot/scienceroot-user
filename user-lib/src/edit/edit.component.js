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
var ScrUserEditComponent = /** @class */ (function () {
    function ScrUserEditComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.user = this.activatedRoute.snapshot.data.user;
    }
    ScrUserEditComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n\n    <div class=\"scr-primary-text\">\n      <span class=\"mat-display-3\">\n        Edit Profile\n      </span>\n    </div>\n    <div class=\"section\">\n      <scr-user-edit-wallet-info [user]=\"user\">\n      </scr-user-edit-wallet-info>\n    </div>\n    <div class=\"section\">\n      <scr-user-contact-edit  [contact]=\"user.contact\"\n                              [userId]=\"user.uid\"> \n      </scr-user-contact-edit>\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"section\">\n      <scr-user-edit-interests [interests]=\"user.interests\">\n      </scr-user-edit-interests>  \n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"section\">\n      <scr-user-edit-languages [languages]=\"user.languages\">\n      </scr-user-edit-languages>\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"section\">\n      <scr-user-edit-jobs [jobs]=\"user.jobs\">\n      </scr-user-edit-jobs>\n    </div>\n    \n    <div class=\"actions\">\n      <div  fxLayout=\"row\"\n            fxLayoutAlign=\"end\">\n        <div fxFlex=\"100px\">\n          <a  mat-button=\"\"\n              color=\"accent\"\n              [routerLink]=\"['/user', user.uid, 'info']\">\n            Back to Profile\n          </a>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    .section { padding: 24px;}\n  "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ScrUserEditComponent);
    return ScrUserEditComponent;
}());
exports.ScrUserEditComponent = ScrUserEditComponent;
//# sourceMappingURL=edit.component.js.map