class ColorUtils {
    public getColor(
        isSelected: boolean,
        isSelectedStartOrEnd: boolean,
        isDisabled: boolean
      ) {
        return ({
          selectedFirstOrLastColor,
          normalColor,
          selectedColor,
          disabledColor
        }: any)  => {
          if (isSelectedStartOrEnd) {
            return selectedFirstOrLastColor;
          } else if (isSelected) {
            return selectedColor;
          } else if (isDisabled) {
            return disabledColor;
          } else {
            return normalColor;
          }
        };
      }
}

export default new ColorUtils();