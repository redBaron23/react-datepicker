import { useDay } from "@datepicker-react/hooks";
import { useContext, useRef } from "react";
import ColorUtils from "../../Utils/ColorUtils";
import DatepickerContext from "./datepickerContext";

interface Props {
  dayLabel: string;
  date: Date;
}

const Day = (props: Props) => {
  const { dayLabel, date } = props;
  const dayRef = useRef(null);

  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);

  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = ColorUtils.getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  return (
    <button
      onClick={() => onClick()}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      style={{
        padding: "8px",
        border: 0,
        color: getColorFn({
          selectedFirstOrLastColor: "#FFFFFF",
          normalColor: "#001217",
          selectedColor: "#FFFFFF",
          rangeHoverColor: "#FFFFFF",
          disabledColor: "#808285",
        }),
        background: getColorFn({
          selectedFirstOrLastColor: "#00aeef",
          normalColor: "#FFFFFF",
          selectedColor: "#71c9ed",
          rangeHoverColor: "#71c9ed",
          disabledColor: "#FFFFFF",
        }),
      }}
    >
      {dayLabel}
    </button>
  );
};

export default Day;
