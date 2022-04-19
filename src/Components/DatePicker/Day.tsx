import { useDay } from "@datepicker-react/hooks";
import { useContext, useRef } from "react";
import styled from "styled-components";
import Global from "../../styles/Global";
import theme from "../../styles/theme";
import ColorUtils from "../../Utils/ColorUtils";
import DateUtils from "../../Utils/DateUtils";
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
    disabledDate
  );

  const currentColor = getColorFn({
    selectedFirstOrLastColor: "#FFFFFF",
    normalColor: "#001217",
    selectedColor: "#FFFFFF",
    disabledColor: "#808285",
  });

  const currentBackground = getColorFn({
    normalColor: theme.colors.primary,
    selectedFirstOrLastColor: theme.colors.darkPrimary,
    selectedColor: "#71c9ed",
    rangeHoverColor: "#71c9ed",
    disabledColor: "#FFFFFF",
  });

  return (
    <DayButton
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      color={currentColor}
      background={currentBackground}
    >
      <DayContainer>
        <DayLabel isSelected={isSelectedStartOrEnd}>{dayLabel}</DayLabel>
        {isSelectedStartOrEnd && <div>{DateUtils.getDayLetters(date)}</div>}
      </DayContainer>
    </DayButton>
  );
};

const DayButton = styled.button<{ color: string; background: string }>`
  padding: 8px;
  border: 0;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: 4px;
  width: ${Global.sizes.DAY_WIDTH}
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayLabel = styled.div<{ isSelected: boolean}>`
  font-size: 1.5em;
  font-weight: ${props => props.isSelected ? "bold" : "normal"};
  `

export default Day;
