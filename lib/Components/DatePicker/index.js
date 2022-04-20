"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("@datepicker-react/hooks");
var react_1 = __importStar(require("react"));
var datepickerContext_1 = __importDefault(require("./datepickerContext"));
var Month_1 = __importDefault(require("./Month"));
var DatePicker = function (props) {
    var _a = (0, react_1.useState)(hooks_1.START_DATE), focusedInput = _a[0], setFocusedInput = _a[1];
    var _b = (0, hooks_1.useDatepicker)({
        startDate: props.currentDate,
        endDate: props.currentDate,
        focusedInput: focusedInput,
        onDatesChange: handleDateChange,
        numberOfMonths: 1,
    }), firstDayOfWeek = _b.firstDayOfWeek, activeMonths = _b.activeMonths, isDateSelected = _b.isDateSelected, isDateHovered = _b.isDateHovered, isFirstOrLastSelectedDate = _b.isFirstOrLastSelectedDate, isDateBlocked = _b.isDateBlocked, isDateFocused = _b.isDateFocused, focusedDate = _b.focusedDate, onDateHover = _b.onDateHover, onDateSelect = _b.onDateSelect, onDateFocus = _b.onDateFocus, goToPreviousMonths = _b.goToPreviousMonths, goToNextMonths = _b.goToNextMonths, goToDate = _b.goToDate;
    function handleDateChange(data) {
        setFocusedInput(hooks_1.START_DATE);
        props.onChange(data.startDate);
    }
    return (react_1.default.createElement(datepickerContext_1.default.Provider, { value: {
            focusedDate: focusedDate,
            isDateFocused: isDateFocused,
            isDateSelected: isDateSelected,
            isDateHovered: isDateHovered,
            isDateBlocked: isDateBlocked,
            isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
            onDateSelect: onDateSelect,
            onDateFocus: onDateFocus,
            onDateHover: onDateHover,
            goToDate: goToDate,
            activeDate: activeMonths[0].date,
        } },
        react_1.default.createElement(Month_1.default, { year: activeMonths[0].year, month: activeMonths[0].month, firstDayOfWeek: firstDayOfWeek, goToPreviousMonths: goToPreviousMonths, goToNextMonths: goToNextMonths })));
};
exports.default = DatePicker;
//# sourceMappingURL=index.js.map