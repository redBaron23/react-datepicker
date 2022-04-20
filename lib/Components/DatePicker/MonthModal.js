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
var reactjs_popup_1 = __importDefault(require("reactjs-popup"));
require("reactjs-popup/dist/index.css");
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../styles/theme"));
var DateUtils_1 = __importDefault(require("../../Utils/DateUtils"));
var datepickerContext_1 = __importDefault(require("./datepickerContext"));
var MonthModal = function (props) {
    var _a = (0, react_1.useContext)(datepickerContext_1.default), goToDate = _a.goToDate, activeDate = _a.activeDate;
    var isMonthSelected = function (month) {
        var monthName = DateUtils_1.default.getMonthNameByNumber(props.selectedMonth);
        return monthName === month;
    };
    var handleSelectMonth = function (month) {
        var monthNumber = DateUtils_1.default.getMonthNumberByName(month);
        var newDate = DateUtils_1.default.changeMonth(activeDate, monthNumber);
        goToDate(newDate);
        props.closeModal();
    };
    return (react_1.default.createElement(StyledPopup, { trigger: props.children, closeOnDocumentClick: true, onClose: props.closeModal, position: "bottom center", open: props.open },
        react_1.default.createElement(Modal, null,
            react_1.default.createElement(MonthContainer, null, DateUtils_1.default.getMonthsNames().map(function (month) { return (react_1.default.createElement(Month, { key: month, selected: isMonthSelected(month), onClick: function () { return handleSelectMonth(month); } }, month)); })))));
};
var StyledPopup = (0, styled_components_1.default)(reactjs_popup_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &-content {\n    border-radius: 5px;\n    padding: 0;\n    width: auto !important;\n  }\n  &-arrow {\n    visibility: hidden;\n  }\n"], ["\n  &-content {\n    border-radius: 5px;\n    padding: 0;\n    width: auto !important;\n  }\n  &-arrow {\n    visibility: hidden;\n  }\n"])));
var Modal = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var MonthContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n"], ["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n"])));
var Month = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: rgba(255, 255, 255, 1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ", "\n"], ["\n  background-color: rgba(255, 255, 255, 1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ", "\n"])), function (props) {
    return props.selected &&
        "\n    background: ".concat(theme_1.default.colors.lightBlue, ";\n    font-weight: bold;\n    color: ").concat(theme_1.default.colors.lightPrimary, ";\n  ");
});
exports.default = MonthModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MonthModal.js.map