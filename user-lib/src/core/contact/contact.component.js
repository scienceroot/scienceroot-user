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
var platform_browser_1 = require("@angular/platform-browser");
var contact_model_1 = require("./contact.model");
var ScrUserContactComponent = /** @class */ (function () {
    function ScrUserContactComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    ScrUserContactComponent.prototype.ngOnInit = function () {
        if (!!this.contact) {
            this.skypeLink = this._sanitizer.bypassSecurityTrustUrl('skype:' + this.contact.skype);
            this.twitterLink = 'https://twitter.com/' + this.contact.twitter;
            this.phoneLink = 'tel:' + this.contact.phone;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", contact_model_1.ScrUserContact)
    ], ScrUserContactComponent.prototype, "contact", void 0);
    ScrUserContactComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-contact',
            template: "\n    <div class=\"mat-headline\">\n        <span>\n          Contact\n        </span>\n    </div>\n    <ng-container *ngIf=\"!contact || (!contact.skype && !contact.phone && !contact.twitter)\">\n      <div class=\"mat-body-1\">\n        <span>No contact information available.</span>\n      </div>\n    </ng-container>\n    <div *ngIf=\"!!contact\">\n      <ng-container *ngIf=\"!!contact.skype\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"64px\">\n            <span class=\"mat-caption\">Skype</span>\n          </div>\n          <div fxFlex=\"\">\n            <a  class=\"mat-body-2\"\n                [href]=\"skypeLink\">\n              <span>{{ contact.skype }}</span>\n            </a>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"!!contact.phone\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"64px\">\n            <span class=\"mat-caption\">Phone</span>\n          </div>\n          <div fxFlex=\"\">\n            <a  class=\"mat-body-2\"\n                [href]=\"phoneLink\">\n              {{ contact.phone }}\n            </a>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"!!contact.twitter\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"64px\">\n            <span class=\"mat-caption\">Twitter</span>\n          </div>\n          <div fxFlex=\"\">\n            <a  class=\"mat-body-2\"\n                [href]=\"twitterLink\"\n                target=\"_blank\"\n                rel=\"noopener\">\n              <span>{{ contact.twitter }}</span>\n            </a>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], ScrUserContactComponent);
    return ScrUserContactComponent;
}());
exports.ScrUserContactComponent = ScrUserContactComponent;
//# sourceMappingURL=contact.component.js.map