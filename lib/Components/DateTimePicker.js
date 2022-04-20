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
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importStar(require("react"));
var StringUtils_1 = __importDefault(require("../Utils/StringUtils"));
var CommonStyles_1 = require("../styles/CommonStyles");
var theme_1 = __importDefault(require("../styles/theme"));
var DateUtils_1 = __importDefault(require("../Utils/DateUtils"));
var DatePicker_1 = __importDefault(require("./DatePicker"));
var TimePicker_1 = __importDefault(require("./TimePicker"));
function DateTimePicker(props) {
    var _a = (0, react_1.useState)(new Date()), currentDate = _a[0], setCurrentDate = _a[1];
    var _b = (0, react_1.useState)(""), currentTime = _b[0], setCurrentTime = _b[1];
    var _c = (0, react_1.useState)(""), currentEmail = _c[0], setCurrentEmail = _c[1];
    var unavailableDates = (0, react_1.useMemo)(function () { return props.eventsData.map(function (event) { return event.date; }); }, [props.eventsData]);
    var isButtonDisabled = (0, react_1.useMemo)(function () {
        return !currentDate || !currentTime || !StringUtils_1.default.isValidEmail(currentEmail);
    }, [currentDate, currentTime, currentEmail]);
    var handleChangeEmail = function (event) {
        setCurrentEmail(event.target.value);
    };
    var onChangeTime = function (time) {
        setCurrentTime(time);
    };
    var onChangeDate = function (date) {
        setCurrentDate(date);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        var dateToSubmit = DateUtils_1.default.stringToDateHours(currentDate, currentTime);
        var eventPayload = {
            date: dateToSubmit,
            email: currentEmail,
        };
        console.log(eventPayload);
    };
    return (react_1.default.createElement(RootContainer, { onSubmit: handleSubmit },
        react_1.default.createElement(Container, null,
            react_1.default.createElement(HalfContainer, null,
                react_1.default.createElement(CommonStyles_1.Label, null, "Select Date"),
                react_1.default.createElement(DatePicker_1.default, { onChange: onChangeDate, currentDate: currentDate })),
            react_1.default.createElement(HalfContainer, null,
                react_1.default.createElement(Input, { placeholder: "Enter your email", required: true, type: "email", onChange: handleChangeEmail }),
                react_1.default.createElement(TimePicker_1.default, { unavailableDates: unavailableDates, onChange: onChangeTime, currentDate: currentDate }))),
        react_1.default.createElement(Button, { type: "submit", disabled: isButtonDisabled }, "Get Appointment")));
}
var RootContainer = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 4em;\n  align-items: center;\n"], ["\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 4em;\n  align-items: center;\n"])));
var Container = styled_components_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  gap: 1em;\n  width: 100%;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 1em;\n  width: 100%;\n  height: 100%;\n"])));
var HalfContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1em;\n  width: 48%;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1em;\n  width: 48%;\n  height: 100%;\n"])));
var Input = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  padding: 12px 0px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 2px solid ", ";\n  font-size: 1.5em;\n\n  &:focus-visible {\n    outline: none;\n  }\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  padding: 12px 0px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 2px solid ", ";\n  font-size: 1.5em;\n\n  &:focus-visible {\n    outline: none;\n  }\n  ::placeholder {\n    color: ", ";\n  }\n"])), theme_1.default.colors.lightFontColor, theme_1.default.colors.lightFontColor);
var Button = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 12em;\n  padding: 1em 0px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 1.25em;\n  border-radius: 10px;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    border: none;\n  }\n"], ["\n  width: 12em;\n  padding: 1em 0px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 1.25em;\n  border-radius: 10px;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    border: none;\n  }\n"])), theme_1.default.colors.darkPrimary, theme_1.default.colors.lightFontColor, theme_1.default.colors.disabledButtonBackground, theme_1.default.colors.disabledButtonText);
exports.default = DateTimePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=DateTimePicker.js.map