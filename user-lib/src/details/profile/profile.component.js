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
var ScrUserProfileComponent = /** @class */ (function () {
    function ScrUserProfileComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserProfileComponent.prototype, "user", void 0);
    ScrUserProfileComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-profile',
            template: "\n    <div class=\"header-container\">\n      <scr-user-profile-header [user]=\"user\">\n      </scr-user-profile-header>\n    </div>\n    <div class=\"menu-container\">\n      <scr-user-profile-menu [user]=\"user\">\n      </scr-user-profile-menu>\n    </div>\n    <div>\n      <ng-content>\n        \n      </ng-content>\n    </div>\n  ",
            styles: ["\n    .header-container {\n      margin-bottom: 24px;\n    }\n\n    .menu-container {\n      margin: 24px 0;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ScrUserProfileComponent);
    return ScrUserProfileComponent;
}());
exports.ScrUserProfileComponent = ScrUserProfileComponent;
//# sourceMappingURL=profile.component.js.map