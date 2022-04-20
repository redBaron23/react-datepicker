"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datepickerContextDefaultValue = void 0;
var react_1 = __importDefault(require("react"));
exports.datepickerContextDefaultValue = {
    focusedDate: null,
    isDateFocused: function (date) { return false; },
    isDateSelected: function (date) { return false; },
    isDateHovered: function (date) { return false; },
    isDateBlocked: function (date) { return false; },
    isFirstOrLastSelectedDate: function (date) { return false; },
    onDateFocus: function (date) { },
    onDateHover: function (date) { },
    onDateSelect: function (date) { },
    goToDate: function (date) { },
    activeDate: Date,
};
exports.default = react_1.default.createContext(exports.datepickerContextDefaultValue);
//# sourceMappingURL=datepickerContext.js.map