"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrAddress = /** @class */ (function () {
    function ScrAddress(street, zip, city, country) {
        this.street = street;
        this.zip = zip;
        this.city = city;
        this.country = country;
    }
    ScrAddress.prototype.toString = function () {
        return this.city + ", " + this.country;
    };
    return ScrAddress;
}());
exports.ScrAddress = ScrAddress;
//# sourceMappingURL=address.model.js.map