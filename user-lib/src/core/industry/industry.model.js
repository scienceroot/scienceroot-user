"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrUserIndustry = /** @class */ (function () {
    function ScrUserIndustry(id, name, displayName) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
    }
    ScrUserIndustry.fromObjectArray = function (objArr) {
        if (objArr === void 0) { objArr = []; }
        var mapFnc = function (obj) { return ScrUserIndustry.fromObject(obj); };
        return objArr.map(mapFnc);
    };
    ScrUserIndustry.fromObject = function (obj) {
        return new ScrUserIndustry(obj.id, obj.name, obj.displayName);
    };
    return ScrUserIndustry;
}());
exports.ScrUserIndustry = ScrUserIndustry;
//# sourceMappingURL=industry.model.js.map