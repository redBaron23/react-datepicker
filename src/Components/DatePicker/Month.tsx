import { FirstDayOfWeek, useMonth } from "@datepicker-react/hooks";
import styled from "styled-components";
import theme from "../../styles/theme";
import Day from "./Day";

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

  return (
    <MainContainer>
      <Header>
        <Arrow onClick={goToPreviousMonths}>&#60;</Arrow>
        <strong>{monthLabel}</strong>
        <Arrow onClick={goToNextMonths}>&#62;</Arrow>
      </Header>
      {/* <div style={{ textAlign: "center", margin: "0 0 16px" }}>
      </div> */}
      <WeekDays>
        {weekdayLabels.map((dayLabel) => (
          <div style={{ textAlign: "center" }} key={dayLabel}>
            {/**
             * Just the first letter of the day label
             */}
            {dayLabel[0]}
          </div>
        ))}
      </WeekDays>
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

          return <div key={index} />;
        })}
      </DaysContainer>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  background-color: ${theme.colors.primary};
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.lightPrimary};
  height: 40px;
  align-items: center;
  margin: 0 0 16px;
`;

const Arrow = styled.div`
  font-size: 1.5em;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin-bottom: 10px;
  font-size: 10px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
`;

export default Month;
