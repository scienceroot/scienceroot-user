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
var ScrUserNewTypeComponent = /** @class */ (function () {
    function ScrUserNewTypeComponent() {
        this.typeChange = new core_1.EventEmitter();
        this.userTypes = user_model_1.SCR_USER_TYPES;
        this.activeType = this.userTypes[0];
    }
    ScrUserNewTypeComponent.prototype.ngOnInit = function () {
        this.typeChange.emit(this.activeType);
    };
    ScrUserNewTypeComponent.prototype.onTypeChange = function (event, type) {
        if (event.checked) {
            this.activeType = type;
        }
        else {
            this.activeType = null;
        }
        this.typeChange.emit(this.activeType);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrUserNewTypeComponent.prototype, "typeChange", void 0);
    ScrUserNewTypeComponent = __decorate([
        core_1.Component({
            selector: 'scr-user-new-type',
            template: "\n    <span class=\"mat-headline\">\n      Account type\n    </span>\n    <div  fxLayout=\"row\"\n          fxLayoutGap=\"24px\">\n     <div *ngFor=\"let type of userTypes\"\n          fxFlex=\"\">\n       <mat-checkbox  [value]=\"type\"\n                      [checked]=\"activeType && (type.name === activeType.name)\"\n                      (change)=\"onTypeChange($event, type)\">\n         <scr-user-new-type-label [type]=\"type\">\n         </scr-user-new-type-label>\n       </mat-checkbox>\n     </div> \n    </div>\n  ",
            styles: ["\n  \n  "]
        })
    ], ScrUserNewTypeComponent);
    return ScrUserNewTypeComponent;
}());
exports.ScrUserNewTypeComponent = ScrUserNewTypeComponent;
//# sourceMappingURL=type.component.js.map