"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var assets_1 = __importDefault(require("../../assets"));
var CommonStyles_1 = require("../../styles/CommonStyles");
var theme_1 = __importDefault(require("../../styles/theme"));
var DateUtils_1 = __importDefault(require("../../Utils/DateUtils"));
var Tooltip_1 = __importDefault(require("../Common/Tooltip"));
var timeOptions = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
];
var TimePicker = function (props) {
    var _a = (0, react_1.useState)(""), selectedTimeOption = _a[0], setSelectedTimeOption = _a[1];
    var unavailableDates = (0, react_1.useMemo)(function () {
        setSelectedTimeOption("");
        return props.unavailableDates
            .filter(function (date) {
            return DateUtils_1.default.areSameYearMonthAndDay(props.currentDate, date);
        })
            .map(function (date) { return DateUtils_1.default.dateToStringHours(date); });
    }, [props.unavailableDates, props.currentDate]);
    var handleOnSelect = function (time) {
        setSelectedTimeOption(time);
        props.onChange(time);
    };
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(CommonStyles_1.Label, null, "Select Time"),
        react_1.default.createElement(GridContainer, null, timeOptions.map(function (time, index) {
            var isDisabled = unavailableDates.includes(time);
            return (react_1.default.createElement(Tooltip_1.default, { content: "Not available", disabled: !isDisabled, key: index },
                react_1.default.createElement(TimeOption, { selected: selectedTimeOption === time, onClick: function () { return handleOnSelect(time); }, disabled: isDisabled }, time)));
        })),
        react_1.default.createElement(Warning, null,
            react_1.default.createElement(assets_1.default.WarningIcon, { width: "1em", height: "1em", style: { paddingLeft: "1em" } }),
            react_1.default.createElement(CustomLabel, null, "All times are in central Time (Bangladesh)"),
            react_1.default.createElement(CommonStyles_1.Arrow, { color: theme_1.default.colors.darkWarning }, ">"))));
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var GridContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1em;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 1em 0em;\n"], ["\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1em;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding: 1em 0em;\n"])));
var TimeOption = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1em;\n  background-color: ", ";\n  color: ", ";\n  padding: 1em;\n  cursor: ", ";\n  font-weight: 600;\n\n  ", "\n\n  ", "\n"], ["\n  font-size: 1em;\n  background-color: ", ";\n  color: ", ";\n  padding: 1em;\n  cursor: ", ";\n  font-weight: 600;\n\n  ", "\n\n  ", "\n"])), theme_1.default.colors.primary, theme_1.default.colors.darkFontColor, function (props) { return (props.selected ? "default" : "pointer"); }, function (props) {
    return props.selected &&
        "\n        background-color: ".concat(theme_1.default.colors.darkPrimary, ";\n        color: ").concat(theme_1.default.colors.lightFontColor, ";\n    ");
}, function (props) {
    return props.disabled &&
        "\n        background-color: ".concat(theme_1.default.colors.disabledBackground, ";\n        color: ").concat(theme_1.default.colors.disabledText, ";\n        cursor: default;\n    ");
});
var Warning = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 1em 0em;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  background-color: ", ";\n  padding: 1em 0em;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n"])), theme_1.default.colors.warning);
var CustomLabel = (0, styled_components_1.default)(CommonStyles_1.Label)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-grow: 0.6;\n"], ["\n  flex-grow: 0.6;\n"])));
exports.default = TimePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map