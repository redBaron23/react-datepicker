"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrow = exports.Label = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Label = styled_components_1.default.strong(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 1.5em;\n"], ["\n  font-size: 1.5em;\n"])));
exports.Arrow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 2em;\n    cursor: pointer;\n    padding: 0 0.5em;\n    color: ", ";\n    font-weight: bold;\n"], ["\n    font-size: 2em;\n    cursor: pointer;\n    padding: 0 0.5em;\n    color: ", ";\n    font-weight: bold;\n"])), function (props) { return props.color || '#000'; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=CommonStyles.js.map