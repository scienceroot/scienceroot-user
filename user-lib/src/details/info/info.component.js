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
var ScrUserDetailsInfoComponent = /** @class */ (function () {
    function ScrUserDetailsInfoComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.data.subscribe(function (data) {
            _this.user = data.user;
        });
    }
    ScrUserDetailsInfoComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <scr-user-profile [user]=\"user\">\n      <div class=\"info-section\">\n        <scr-user-contact [contact]=\"user.contact\">\n        </scr-user-contact>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"info-section\">\n        <scr-user-details-info-interests [user]=\"user\">\n        </scr-user-details-info-interests>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"info-section\">\n        <scr-user-details-info-languages [user]=\"user\">\n        </scr-user-details-info-languages>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"info-section\">\n        <scr-user-details-info-jobs [user]=\"user\">\n        </scr-user-details-info-jobs>\n      </div>\n    </scr-user-profile>\n  ",
            styles: ["\n    .info-section {\n      padding: 24px 0;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ScrUserDetailsInfoComponent);
    return ScrUserDetailsInfoComponent;
}());
exports.ScrUserDetailsInfoComponent = ScrUserDetailsInfoComponent;
//# sourceMappingURL=info.component.js.map