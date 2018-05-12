"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var documents_component_1 = require("./documents.component");
var profile_module_1 = require("../profile/profile.module");
var material_1 = require("@angular/material");
var document_model_1 = require("./document.model");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var ScrUserDetailsDocumentsModule = (function () {
    function ScrUserDetailsDocumentsModule() {
    }
    ScrUserDetailsDocumentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatIconModule,
                material_1.MatChipsModule,
                profile_module_1.ScrUserProfileModule
            ],
            declarations: [
                documents_component_1.ScrUserDetailsDocumentsComponent
            ],
            exports: [
                documents_component_1.ScrUserDetailsDocumentsComponent
            ],
            providers: [document_model_1.ScrDocumentService]
        })
    ], ScrUserDetailsDocumentsModule);
    return ScrUserDetailsDocumentsModule;
}());
exports.ScrUserDetailsDocumentsModule = ScrUserDetailsDocumentsModule;
//# sourceMappingURL=documents.module.js.map