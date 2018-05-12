"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../core/user.service");
var core_1 = require("@angular/core");
var ScrDocument = (function () {
    function ScrDocument(title, createdAt, keywords, authors) {
        this.title = title;
        this.createdAt = createdAt;
        this.keywords = keywords;
        this.authors = authors;
    }
    return ScrDocument;
}());
exports.ScrDocument = ScrDocument;
var SCR_DOCUMENT_MOCK = [
    new ScrDocument('Ecological meltdown in predator-free forest fragments', new Date(), ['Forest', 'Nature', 'Trees', 'Animals'], [user_service_1.SCR_USER_MOCK]),
    new ScrDocument('The spectre at the feast: Capitalist crisis and the politics of recession', new Date(), ['Economics', 'Recession', 'Money'], [user_service_1.SCR_USER_MOCK])
];
var ScrDocumentService = (function () {
    function ScrDocumentService() {
    }
    ScrDocumentService.prototype.byUserId = function (userId) {
        return Promise.resolve(SCR_DOCUMENT_MOCK);
    };
    ScrDocumentService = __decorate([
        core_1.Injectable()
    ], ScrDocumentService);
    return ScrDocumentService;
}());
exports.ScrDocumentService = ScrDocumentService;
//# sourceMappingURL=document.model.js.map