import {
  useDatepicker,
  START_DATE,
  FocusedInput,
} from "@datepicker-react/hooks";
import { useState } from "react";
import DatepickerContext from "./datepickerContext";
import Month from "./Month";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
  } = useDatepicker({
    startDate: startDate,
    endDate: endDate,
    focusedInput: focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
    
  });

  function handleDateChange(data: any) {
    if (!data.focusedInput) {
      setFocusedInput(START_DATE);
    } else {
      setStartDate(data.startDate);
      setEndDate(data.endDate);
      setFocusedInput(data.focusedInput);
    }
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
