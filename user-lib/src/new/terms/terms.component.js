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
var ScrUserNewTermsComponent = /** @class */ (function () {
    function ScrUserNewTermsComponent() {
        this.checkedChange = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrUserNewTermsComponent.prototype, "checkedChange", void 0);
    ScrUserNewTermsComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-new-terms',
            template: "\n    <mat-checkbox (change)=\"checkedChange.emit($event.checked)\">\n          <span class=\"mat-body-2\">\n            I agree to the\n          </span>\n          <a [routerLink]=\"['/user', 'terms']\"\n             target=\"_blank\"\n             class=\"mat-body-2\">\n            Terms and Conditions\n          </a>\n    </mat-checkbox>\n  ",
            styles: ["    \n  "]
        })
    ], ScrUserNewTermsComponent);
    return ScrUserNewTermsComponent;
}());
exports.ScrUserNewTermsComponent = ScrUserNewTermsComponent;
//# sourceMappingURL=terms.component.js.map