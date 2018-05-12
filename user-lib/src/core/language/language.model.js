"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrUserLanguage = /** @class */ (function () {
    function ScrUserLanguage(id, name) {
        this.id = id;
        this.name = name;
    }
    ScrUserLanguage.fromObjectArray = function (objArr) {
        var mapFnc = function (obj) { return ScrUserLanguage.fromObject(obj); };
        return objArr.map(mapFnc);
    };
    ScrUserLanguage.fromObject = function (obj) {
        return new ScrUserLanguage(obj.id, obj.name);
    };
    return ScrUserLanguage;
}());
exports.ScrUserLanguage = ScrUserLanguage;
//# sourceMappingURL=language.model.js.map