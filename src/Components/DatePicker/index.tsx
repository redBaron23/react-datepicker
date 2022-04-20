import {
  useDatepicker,
  START_DATE,
  FocusedInput,
} from "@datepicker-react/hooks";
import React, { useState } from "react";
import DatepickerContext from "./datepickerContext";
import Month from "./Month";

interface Props {
  onChange: (date: Date) => void;
  currentDate: Date;
}

const DatePicker = (props: Props) => {
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(START_DATE);

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
    goToDate,
  } = useDatepicker({
    startDate: props.currentDate,
    endDate: props.currentDate,
    focusedInput: focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  function handleDateChange(data: any) {
      setFocusedInput(START_DATE);
      props.onChange(data.startDate);
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
        goToDate,
        activeDate: activeMonths[0].date,
      }}
    >
      <Month
        year={activeMonths[0].year}
        month={activeMonths[0].month}
        firstDayOfWeek={firstDayOfWeek}
        goToPreviousMonths={goToPreviousMonths}
        goToNextMonths={goToNextMonths}
      />
    </DatepickerContext.Provider>
  );
};

export default DatePicker;
