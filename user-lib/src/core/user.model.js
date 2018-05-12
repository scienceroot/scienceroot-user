"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_model_1 = require("./contact/contact.model");
var job_model_1 = require("./job/job.model");
exports.SCR_USER_TYPES = [
    {
        name: 'journal',
        displayName: 'Ecosystem Account',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        icon: 'search'
    },
    {
        name: 'investor',
        displayName: 'Investor Account',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
        icon: 'credit_card'
    }
];
var ScrUser = /** @class */ (function () {
    function ScrUser(mail, password, uid, forename, lastname, address, contact, roles, jobs, interests, languages, publicAddress) {
        this.mail = mail;
        this.password = password;
        this.uid = uid;
        this.forename = forename;
        this.lastname = lastname;
        this.address = address;
        this.contact = contact;
        this.roles = roles;
        this.jobs = jobs;
        this.interests = interests;
        this.languages = languages;
        this.publicAddress = publicAddress;
    }
    ScrUser.fromObjArr = function (objArr) {
        if (objArr === void 0) { objArr = []; }
        return objArr.map(ScrUser.fromObj);
    };
    ScrUser.fromObj = function (obj) {
        var jobs = !!obj.jobs ? job_model_1.ScrUserJob.fromObjArr(obj.jobs) : [];
        var contact = !!obj.contact ? contact_model_1.ScrUserContact.fromObject(obj.contact) : new contact_model_1.ScrUserContact();
        return new ScrUser(obj.mail, obj.password, obj.uid, obj.forename, obj.lastname, obj.address, contact, obj.roles, jobs, obj.interests, obj.languages, obj.publicKey);
    };
    ScrUser.prototype.isValid = function () {
        return !!this.forename && !!this.lastname && !!this.mail;
    };
    return ScrUser;
}());
exports.ScrUser = ScrUser;
//# sourceMappingURL=user.model.js.map