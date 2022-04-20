"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var reactjs_popup_1 = __importDefault(require("reactjs-popup"));
var styled_components_1 = __importDefault(require("styled-components"));
var Tooltip = function (props) {
    var _a = (0, react_2.useState)(false), open = _a[0], setOpen = _a[1];
    return (react_1.default.createElement(reactjs_popup_1.default, { disabled: props.disabled, trigger: react_1.default.createElement(Container, { onMouseOver: function () { return setOpen(true); }, onMouseLeave: function () { return setOpen(false); } }, props.children), position: "right center", closeOnDocumentClick: true, open: open },
        react_1.default.createElement("span", null,
            " ",
            props.content,
            " ")));
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n"], ["\n  display: grid;\n"])));
exports.default = Tooltip;
var templateObject_1;
//# sourceMappingURL=Tooltip.js.map