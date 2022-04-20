import { FirstDayOfWeek, useMonth } from "@datepicker-react/hooks";
import { useState } from "react";
import styled from "styled-components";
import { Arrow } from "../../styles/CommonStyles";
import Global from "../../styles/Global";
import theme from "../../styles/theme";
import Day from "./Day";
import MonthModal from "./MonthModal";

interface Props {
  year: number;
  month: number;
  firstDayOfWeek: FirstDayOfWeek;
  goToPreviousMonths: () => void;
  goToNextMonths: () => void;
}

const Month = (props: Props) => {
  const { year, month, firstDayOfWeek, goToPreviousMonths, goToNextMonths } =
    props;

  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
  const toggleMonthModal = () => setIsMonthModalOpen((prevState) => !prevState);

  return (
    <MainContainer>
      <MonthModal
        open={isMonthModalOpen}
        closeModal={() => setIsMonthModalOpen(false)}
        selectedMonth={month}
      >
        <Header>
          <Arrow onClick={goToPreviousMonths}>&#60;</Arrow>
          <MonthLabel onClick={toggleMonthModal}>{monthLabel}</MonthLabel>
          <Arrow onClick={goToNextMonths}>&#62;</Arrow>
        </Header>
      </MonthModal>
      <WeekDaysContainer>
        {weekdayLabels.map((dayLabel) => (
          <WeekDay key={dayLabel}>
            {/**
             * Just the first letter of the day label
             */}
            {dayLabel[0]}
          </WeekDay>
        ))}
      </WeekDaysContainer>
      <DaysContainer>
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <EmptyDay key={index} />;
        })}
      </DaysContainer>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  background-color: ${theme.colors.primary};
  width: 100%;
  min-height: ${Global.sizes.CALENDAR_HEIGHT};
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.lightPrimary};
  height: 4em;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const WeekDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin: 2em 0em;
  font-size: 10px;
  justify-items: center;
`;

const WeekDay = styled.div`
  text-align: center;
  width: ${Global.sizes.DAY_WIDTH};
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
`;

const MonthLabel = styled.strong`
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 500;
  background-color: ${theme.colors.primary};
  padding: 0.5em;
`;

const EmptyDay = styled.div``;

export default Month;
