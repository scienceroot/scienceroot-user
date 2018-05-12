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
var user_1 = require("user");
var ScrUserLinkDemoComponent = /** @class */ (function () {
    function ScrUserLinkDemoComponent(_activeUserService) {
        this._activeUserService = _activeUserService;
        this._dummy = new user_1.ScrUser();
    }
    ScrUserLinkDemoComponent.prototype.set = function () {
        this.activeUser = this._dummy;
        this._emit();
    };
    ScrUserLinkDemoComponent.prototype.reset = function () {
        this.activeUser = null;
        this._emit();
    };
    ScrUserLinkDemoComponent.prototype._emit = function () {
        this._activeUserService.set(this.activeUser);
    };
    ScrUserLinkDemoComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <div  fxLayout=\"row\"\n          fxLayoutGap=\"24px\">\n      <div fxFlex=\"100px\">\n        <button (click)=\"set();\">\n          <span>Set ActiveUser</span>\n        </button>\n      </div>\n      <div fxFlex=\"120px\">\n        <button (click)=\"reset();\">\n          <span>Reset ActiveUser</span>\n        </button>\n      </div>\n    </div>\n  ",
            styles: ["\n  \n  "]
        }),
        __metadata("design:paramtypes", [user_1.ScrActiveUserService])
    ], ScrUserLinkDemoComponent);
    return ScrUserLinkDemoComponent;
}());
exports.ScrUserLinkDemoComponent = ScrUserLinkDemoComponent;
//# sourceMappingURL=link.component.js.map