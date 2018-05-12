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
var active_user_service_1 = require("../../../active/active-user.service");
var ScrUserProfileHeaderComponent = /** @class */ (function () {
    function ScrUserProfileHeaderComponent(activeUserService) {
        this.activeUserService = activeUserService;
        this.activeUser = this.activeUserService.get();
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_model_1.ScrUser)
    ], ScrUserProfileHeaderComponent.prototype, "user", void 0);
    ScrUserProfileHeaderComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-profile-header',
            template: "\n    <div  fxLayout=\"row\"\n          fxLayoutGap=\"24px\">\n      <div fxFlex=\"\">\n        <div class=\"scr-primary-text\">\n          <div>\n            <span class=\"mat-display-3\">\n              {{ user.forename }} {{ user.lastname }}\n            </span>\n            <span class=\"mat-display-1\">\n              ({{ user.mail }})\n            </span>\n          </div>\n        </div>\n        <div>\n          <span class=\"mat-headline\">\n            {{ user.address?.toString() }}\n          </span>\n        </div>\n      </div>\n      <div  fxFlex=\"100px\"\n            fxFlexAlign=\"center\">\n        <scr-user-follow-button [userId]=\"user.uid\">\n        </scr-user-follow-button>\n      </div>\n    </div>\n  ",
            styles: ["\n    .profile--avatar mat-icon {\n      width: 90px;\n      height: 90px;\n      font-size: 90px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [active_user_service_1.ScrActiveUserService])
    ], ScrUserProfileHeaderComponent);
    return ScrUserProfileHeaderComponent;
}());
exports.ScrUserProfileHeaderComponent = ScrUserProfileHeaderComponent;
//# sourceMappingURL=header.component.js.map