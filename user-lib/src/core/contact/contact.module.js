"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var contact_component_1 = require("./contact.component");
var contact_service_1 = require("./contact.service");
var ScrUserContactModule = /** @class */ (function () {
    function ScrUserContactModule() {
    }
    ScrUserContactModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule
            ],
            declarations: [
                contact_component_1.ScrUserContactComponent
            ],
            exports: [
                contact_component_1.ScrUserContactComponent
            ],
            providers: [
                contact_service_1.ScrUserContactService
            ]
        })
    ], ScrUserContactModule);
    return ScrUserContactModule;
}());
exports.ScrUserContactModule = ScrUserContactModule;
//# sourceMappingURL=contact.module.js.map