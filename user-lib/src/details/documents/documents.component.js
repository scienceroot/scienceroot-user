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
var document_model_1 = require("./document.model");
var ScrUserDetailsDocumentsComponent = (function () {
    function ScrUserDetailsDocumentsComponent(activatedRoute, documentService) {
        this.activatedRoute = activatedRoute;
        this.documentService = documentService;
        this.user = this.activatedRoute.snapshot.data.user;
        this.documents = this.documentService.byUserId('abcdefg');
    }
    ScrUserDetailsDocumentsComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n    <scr-user-profile [user]=\"user\">\n      <div class=\"mat-headline jobs--headline\">\n        <mat-icon>\n          description\n        </mat-icon>\n        <span>\n          Documents\n        </span>\n      </div>\n      <div class=\"\">\n        <div  *ngFor=\"let document of documents | async\"\n              class=\"document\">\n          <div class=\"mat-headline scr-primary-text\">\n            {{ document.title }}\n          </div>\n          <div class=\"document-info\">\n            <span>\n              Created\n            </span>\n            <span>\n              {{ document.createdAt | date:'shortDate' }}\n            </span>\n            <span>\n              by\n            </span>\n            <span *ngFor=\"let author of document.authors\">\n              {{ author.lastname }}\n            </span>\n          </div>\n          <div  fxLayout=\"row\"\n                fxLayoutAlign=\"start center\">\n            <div fxFlex=\"100px\">\n              <span>Keywords</span>\n            </div>\n            <div fxFlex=\"\">\n              <mat-chip-list>\n                <mat-chip *ngFor=\"let keyword of document.keywords\"\n                          color=\"primary\"\n                          selected=\"true\">\n                  {{ keyword }}\n                </mat-chip>\n              </mat-chip-list>\n            </div>\n          </div>\n        </div>\n      </div>\n    </scr-user-profile>\n  ",
            styles: ["\n    .document {\n      padding: 12px 0;\n    }\n    \n    .document .document-info {\n      margin: 8px 0;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            document_model_1.ScrDocumentService])
    ], ScrUserDetailsDocumentsComponent);
    return ScrUserDetailsDocumentsComponent;
}());
exports.ScrUserDetailsDocumentsComponent = ScrUserDetailsDocumentsComponent;
//# sourceMappingURL=documents.component.js.map