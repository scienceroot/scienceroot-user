"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var industry_model_1 = require("../industry/industry.model");
var ScrUserJob = /** @class */ (function () {
    function ScrUserJob(id, employer, title, industry, startMonth, startYear, endMonth, endYear) {
        this.id = id;
        this.employer = employer;
        this.title = title;
        this.industry = industry;
        this.startMonth = startMonth;
        this.startYear = startYear;
        this.endMonth = endMonth;
        this.endYear = endYear;
    }
    ScrUserJob.fromObjArr = function (objArr) {
        if (objArr === void 0) { objArr = []; }
        var mapFnc = function (obj) { return ScrUserJob.fromObj(obj); };
        var sortFnc = function (a, b) {
            if ((a.hasEnd() && b.hasEnd()) || (!a.hasEnd() && !b.hasEnd())) {
                if (a.startYear >= b.startYear) {
                    return -1;
                }
                else if (a.startYear < b.startYear) {
                    return 1;
                }
            }
            else if (a.hasEnd() && !b.hasEnd()) {
                return 1;
            }
            else if (!a.hasEnd() && b.hasEnd()) {
                return -1;
            }
        };
        var jobs = objArr.map(mapFnc);
        jobs.sort(sortFnc);
        return jobs;
    };
    ScrUserJob.fromObj = function (obj) {
        if (obj === void 0) { obj = {}; }
        return new ScrUserJob(obj.id, obj.employer, obj.title, industry_model_1.ScrUserIndustry.fromObject(obj.industry), obj.startMonth, obj.startYear, obj.endMonth, obj.endYear);
    };
    ScrUserJob.prototype.hasEnd = function () {
        return !!this.endMonth && !!this.endYear;
    };
    return ScrUserJob;
}());
exports.ScrUserJob = ScrUserJob;
//# sourceMappingURL=job.model.js.map