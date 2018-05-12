"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrUserFieldOfInterest = /** @class */ (function () {
    function ScrUserFieldOfInterest(id, name) {
        this.id = id;
        this.name = name;
    }
    ScrUserFieldOfInterest.fromObjectArray = function (objArr) {
        if (objArr === void 0) { objArr = []; }
        var mapFnc = function (obj) { return ScrUserFieldOfInterest.fromObject(obj); };
        return objArr.map(mapFnc);
    };
    ScrUserFieldOfInterest.fromObject = function (obj) {
        return new ScrUserFieldOfInterest(obj.id, obj.name);
    };
    return ScrUserFieldOfInterest;
}());
exports.ScrUserFieldOfInterest = ScrUserFieldOfInterest;
//# sourceMappingURL=interest.model.js.map