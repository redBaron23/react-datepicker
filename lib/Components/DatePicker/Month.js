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
var hooks_1 = require("@datepicker-react/hooks");
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var CommonStyles_1 = require("../../styles/CommonStyles");
var Global_1 = __importDefault(require("../../styles/Global"));
var theme_1 = __importDefault(require("../../styles/theme"));
var Day_1 = __importDefault(require("./Day"));
var MonthModal_1 = __importDefault(require("./MonthModal"));
var Month = function (props) {
    var year = props.year, month = props.month, firstDayOfWeek = props.firstDayOfWeek, goToPreviousMonths = props.goToPreviousMonths, goToNextMonths = props.goToNextMonths;
    var _a = (0, hooks_1.useMonth)({
        year: year,
        month: month,
        firstDayOfWeek: firstDayOfWeek,
    }), days = _a.days, weekdayLabels = _a.weekdayLabels, monthLabel = _a.monthLabel;
    var _b = (0, react_1.useState)(false), isMonthModalOpen = _b[0], setIsMonthModalOpen = _b[1];
    var toggleMonthModal = function () { return setIsMonthModalOpen(function (prevState) { return !prevState; }); };
    return (react_1.default.createElement(MainContainer, null,
        react_1.default.createElement(MonthModal_1.default, { open: isMonthModalOpen, closeModal: function () { return setIsMonthModalOpen(false); }, selectedMonth: month },
            react_1.default.createElement(Header, null,
                react_1.default.createElement(CommonStyles_1.Arrow, { onClick: goToPreviousMonths }, "<"),
                react_1.default.createElement(MonthLabel, { onClick: toggleMonthModal }, monthLabel),
                react_1.default.createElement(CommonStyles_1.Arrow, { onClick: goToNextMonths }, ">"))),
        react_1.default.createElement(WeekDaysContainer, null, weekdayLabels.map(function (dayLabel) { return (react_1.default.createElement(WeekDay, { key: dayLabel }, dayLabel[0])); })),
        react_1.default.createElement(DaysContainer, null, days.map(function (day, index) {
            if (typeof day === "object") {
                return (react_1.default.createElement(Day_1.default, { date: day.date, key: day.date.toString(), dayLabel: day.dayLabel }));
            }
            return react_1.default.createElement(EmptyDay, { key: index });
        }))));
};
var MainContainer = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100%;\n  min-height: ", ";\n  border-radius: 5px;\n"], ["\n  background-color: ", ";\n  width: 100%;\n  min-height: ", ";\n  border-radius: 5px;\n"])), theme_1.default.colors.primary, Global_1.default.sizes.CALENDAR_HEIGHT);
var Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 4em;\n  align-items: center;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 4em;\n  align-items: center;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n"])), theme_1.default.colors.lightPrimary);
var WeekDaysContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  margin: 2em 0em;\n  font-size: 10px;\n  justify-items: center;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n  margin: 2em 0em;\n  font-size: 10px;\n  justify-items: center;\n"])));
var WeekDay = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: center;\n  width: ", ";\n"], ["\n  text-align: center;\n  width: ", ";\n"])), Global_1.default.sizes.DAY_WIDTH);
var DaysContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-items: center;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-items: center;\n"])));
var MonthLabel = styled_components_1.default.strong(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 500;\n  background-color: ", ";\n  padding: 0.5em;\n"], ["\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 500;\n  background-color: ", ";\n  padding: 0.5em;\n"])), theme_1.default.colors.primary);
var EmptyDay = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
exports.default = Month;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Month.js.map