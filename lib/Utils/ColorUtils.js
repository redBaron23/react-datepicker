"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.prototype.getColor = function (isSelected, isSelectedStartOrEnd, isDisabled) {
        return function (_a) {
            var selectedFirstOrLastColor = _a.selectedFirstOrLastColor, normalColor = _a.normalColor, selectedColor = _a.selectedColor, disabledColor = _a.disabledColor;
            if (isSelectedStartOrEnd) {
                return selectedFirstOrLastColor;
            }
            else if (isSelected) {
                return selectedColor;
            }
            else if (isDisabled) {
                return disabledColor;
            }
            else {
                return normalColor;
            }
        };
    };
    return ColorUtils;
}());
exports.default = new ColorUtils();
//# sourceMappingURL=ColorUtils.js.map