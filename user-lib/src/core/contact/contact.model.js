"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrUserContact = /** @class */ (function () {
    function ScrUserContact(_skype, _phone, _twitter) {
        this._skype = _skype;
        this._phone = _phone;
        this._twitter = _twitter;
    }
    ScrUserContact.fromObject = function (obj) {
        if (obj === void 0) { obj = {}; }
        return new ScrUserContact(obj.skype, obj.phone, obj.twitter);
    };
    ScrUserContact.prototype.toRequest = function () {
        return {
            skype: this._skype,
            phone: this._phone,
            twitter: this._twitter
        };
    };
    Object.defineProperty(ScrUserContact.prototype, "skype", {
        get: function () {
            return this._skype;
        },
        set: function (value) {
            this._skype = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrUserContact.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrUserContact.prototype, "twitter", {
        get: function () {
            return this._twitter;
        },
        set: function (value) {
            this._twitter = value;
        },
        enumerable: true,
        configurable: true
    });
    return ScrUserContact;
}());
exports.ScrUserContact = ScrUserContact;
//# sourceMappingURL=contact.model.js.map