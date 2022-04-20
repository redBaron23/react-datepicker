"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils = (function () {
    function DateUtils() {
    }
    DateUtils.prototype.getDayLetters = function (date, n) {
        if (n === void 0) { n = 3; }
        return date.toLocaleDateString(undefined, {
            weekday: 'long'
        }).substr(0, n).toLocaleUpperCase();
    };
    DateUtils.prototype.getMonthNumberByName = function (monthName) {
        return this.getMonthsNames().indexOf(monthName);
    };
    DateUtils.prototype.getMonthNameByNumber = function (n) {
        return new Date(0, n, 1).toLocaleString(undefined, {
            month: 'long'
        });
    };
    DateUtils.prototype.getMonthsNames = function () {
        var _this = this;
        return __spreadArray([], Array(12).keys(), true).map(function (i) { return _this.getMonthNameByNumber(i); });
    };
    DateUtils.prototype.changeMonth = function (date, n) {
        return new Date(date.getFullYear(), n, date.getDate());
    };
    DateUtils.prototype.dateToStringHours = function (date) {
        return date.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };
    DateUtils.prototype.stringToDateHours = function (date, hours) {
        var _a = hours.split(':'), hour = _a[0], rest = _a[1];
        var _b = rest.split(' '), minutes = _b[0], ampm = _b[1];
        return new Date(date.getFullYear(), date.getMonth(), date.getDay(), +hour, +minutes, 0);
    };
    DateUtils.prototype.areSameYearMonthAndDay = function (date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    };
    return DateUtils;
}());
exports.default = new DateUtils();
//# sourceMappingURL=DateUtils.js.map