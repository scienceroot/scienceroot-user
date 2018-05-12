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
var contact_model_1 = require("../../core/contact/contact.model");
var contact_service_1 = require("../../core/contact/contact.service");
var ScrUserContactEditComponent = /** @class */ (function () {
    function ScrUserContactEditComponent(_contactService) {
        this._contactService = _contactService;
    }
    ScrUserContactEditComponent.prototype.save = function () {
        var _this = this;
        this._contactService.update(this.userId, this.contact)
            .then(function () { return _this.isEdited = false; });
    };
    ScrUserContactEditComponent.prototype.edited = function () {
        if (!this.isEdited) {
            this.isEdited = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScrUserContactEditComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", contact_model_1.ScrUserContact)
    ], ScrUserContactEditComponent.prototype, "contact", void 0);
    ScrUserContactEditComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-contact-edit',
            template: "\n    <div *ngIf=\"contact\">\n      <div>\n        <span class=\"mat-headline\">Contact</span>\n      </div>\n      <div>\n        <mat-form-field>\n          <input  matInput=\"\" \n                  (change)=\"edited()\"\n                  [(ngModel)]=\"contact.skype\"\n                  placeholder=\"Skype Username\" />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input  matInput=\"\"\n                  [(ngModel)]=\"contact.phone\"\n                  (change)=\"edited()\"\n                  type=\"tel\"\n                  placeholder=\"Phone number\" />\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-form-field>\n          <input  matInput=\"\"\n                  [(ngModel)]=\"contact.twitter\"\n                  (change)=\"edited()\"\n                  placeholder=\"Twitter Username\" />\n        </mat-form-field>\n      </div>\n      <div  fxLayout=\"row\"\n            fxLayoutAlign=\"end\"\n            class=\"actions\">\n        <div fxFlex=\"75px\">\n          <button mat-raised-button=\"\"\n                  color=\"accent\"\n                  [disabled]=\"!isEdited\"\n                  (click)=\"save()\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  ",
            styles: ["\n    mat-form-field { width: 100%; }\n  "]
        }),
        __metadata("design:paramtypes", [contact_service_1.ScrUserContactService])
    ], ScrUserContactEditComponent);
    return ScrUserContactEditComponent;
}());
exports.ScrUserContactEditComponent = ScrUserContactEditComponent;
//# sourceMappingURL=edit.component.js.map