"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.prototype.isValidEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    return StringUtils;
}());
exports.default = new StringUtils();
//# sourceMappingURL=StringUtils.js.map