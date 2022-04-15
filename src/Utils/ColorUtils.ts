class ColorUtils {
    public getColor(
        isSelected: boolean,
        isSelectedStartOrEnd: boolean,
        isWithinHoverRange: boolean,
        isDisabled: boolean
      ) {
        return ({
          selectedFirstOrLastColor,
          normalColor,
          selectedColor,
          rangeHoverColor,
          disabledColor
        }: any)  => {
          if (isSelectedStartOrEnd) {
            return selectedFirstOrLastColor;
          } else if (isSelected) {
            return selectedColor;
          } else if (isWithinHoverRange) {
            return rangeHoverColor;
          } else if (isDisabled) {
            return disabledColor;
          } else {
            return normalColor;
          }
        };
      }
}

export default new ColorUtils();