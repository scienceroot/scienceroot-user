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
require("rxjs/add/operator/filter");
var active_user_service_1 = require("../../active/active-user.service");
var ScrUserDetailsLinkContainerComponent = /** @class */ (function () {
    function ScrUserDetailsLinkContainerComponent(activeUserService) {
        var _this = this;
        this.activeUserService = activeUserService;
        this.activeUserService.activeUserChanged
            .subscribe(function (user) {
            _this.activeUser = user;
            console.log(user);
        });
    }
    ScrUserDetailsLinkContainerComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-details-link',
            template: "\n    <div class=\"user-details-link\">\n      <ng-container *ngIf=\"!!activeUser; then profileLink else login\">\n      </ng-container>\n    </div>\n    \n    <ng-template #profileLink>\n      <scr-user-details-link-menu [activeUser]=\"activeUser\">\n      </scr-user-details-link-menu>\n    </ng-template>\n\n    <ng-template #login>\n      <scr-user-details-link-login>\n      </scr-user-details-link-login>\n    </ng-template>\n  ",
            styles: ["\n    \n  "]
        }),
        __metadata("design:paramtypes", [active_user_service_1.ScrActiveUserService])
    ], ScrUserDetailsLinkContainerComponent);
    return ScrUserDetailsLinkContainerComponent;
}());
exports.ScrUserDetailsLinkContainerComponent = ScrUserDetailsLinkContainerComponent;
//# sourceMappingURL=link-container.component.js.map