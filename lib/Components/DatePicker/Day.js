"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("@datepicker-react/hooks");
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var Global_1 = __importDefault(require("../../styles/Global"));
var theme_1 = __importDefault(require("../../styles/theme"));
var ColorUtils_1 = __importDefault(require("../../Utils/ColorUtils"));
var DateUtils_1 = __importDefault(require("../../Utils/DateUtils"));
var datepickerContext_1 = __importDefault(require("./datepickerContext"));
var Day = function (props) {
    var dayLabel = props.dayLabel, date = props.date;
    var dayRef = (0, react_2.useRef)(null);
    var _a = (0, react_2.useContext)(datepickerContext_1.default), focusedDate = _a.focusedDate, isDateFocused = _a.isDateFocused, isDateSelected = _a.isDateSelected, isDateHovered = _a.isDateHovered, isDateBlocked = _a.isDateBlocked, isFirstOrLastSelectedDate = _a.isFirstOrLastSelectedDate, onDateSelect = _a.onDateSelect, onDateFocus = _a.onDateFocus, onDateHover = _a.onDateHover;
    var _b = (0, hooks_1.useDay)({
        date: date,
        focusedDate: focusedDate,
        isDateFocused: isDateFocused,
        isDateSelected: isDateSelected,
        isDateHovered: isDateHovered,
        isDateBlocked: isDateBlocked,
        isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
        onDateFocus: onDateFocus,
        onDateSelect: onDateSelect,
        onDateHover: onDateHover,
        dayRef: dayRef,
    }), isSelected = _b.isSelected, isSelectedStartOrEnd = _b.isSelectedStartOrEnd, isWithinHoverRange = _b.isWithinHoverRange, disabledDate = _b.disabledDate, onClick = _b.onClick, onKeyDown = _b.onKeyDown, onMouseEnter = _b.onMouseEnter, tabIndex = _b.tabIndex;
    if (!dayLabel) {
        return react_1.default.createElement("div", null);
    }
    var getColorFn = ColorUtils_1.default.getColor(isSelected, isSelectedStartOrEnd, false);
    var currentColor = getColorFn({
        selectedFirstOrLastColor: "#FFFFFF",
        normalColor: "#001217",
        selectedColor: "#FFFFFF",
        disabledColor: theme_1.default.colors.disabledText,
    });
    var currentBackground = getColorFn({
        normalColor: theme_1.default.colors.primary,
        selectedFirstOrLastColor: theme_1.default.colors.darkPrimary,
        selectedColor: "#71c9ed",
        rangeHoverColor: "#71c9ed",
        disabledColor: theme_1.default.colors.disabledBackground,
    });
    return (react_1.default.createElement(DayButton, { onClick: onClick, onKeyDown: onKeyDown, onMouseEnter: onMouseEnter, tabIndex: tabIndex, type: "button", ref: dayRef, color: currentColor, background: currentBackground, selected: isSelectedStartOrEnd },
        react_1.default.createElement(DayContainer, null,
            react_1.default.createElement(DayLabel, { isSelected: isSelectedStartOrEnd }, dayLabel),
            isSelectedStartOrEnd && react_1.default.createElement("div", null, DateUtils_1.default.getDayLetters(date)))));
};
var DayButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 8px;\n  border: 0;\n  color: ", ";\n  background: ", ";\n  border-radius: 4px;\n  width: ", ";\n  cursor: ", ";\n"], ["\n  padding: 8px;\n  border: 0;\n  color: ", ";\n  background: ", ";\n  border-radius: 4px;\n  width: ", ";\n  cursor: ", ";\n"])), function (props) { return props.color; }, function (props) { return props.background; }, Global_1.default.sizes.DAY_WIDTH, function (props) {
    return props.selected || props.disabled ? "default" : "pointer";
});
var DayContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n"])), Global_1.default.sizes.DAY_HEIGHT);
var DayLabel = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1.5em;\n  font-weight: ", ";\n"], ["\n  font-size: 1.5em;\n  font-weight: ", ";\n"])), function (props) { return (props.isSelected ? "bold" : "normal"); });
exports.default = Day;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Day.js.map