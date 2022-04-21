import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Icons from "../../assets";
import { Arrow, Label } from "../../styles/CommonStyles";
import theme from "../../styles/theme";
import DateUtils from "../../Utils/DateUtils";
import Tooltip from "../Common/Tooltip";

//Make an array with 9 elements as time options with 1 hour interval from 9 AM to 5 PM
const timeOptions = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

interface Props {
  unavailableDates: Date[];
  onChange: (date: string) => void;
  currentDate: Date;
}

const TimePicker = (props: Props) => {
  const [selectedTimeOption, setSelectedTimeOption] = useState("");

  const unavailableDates = useMemo(() => {
    setSelectedTimeOption("");
    return props.unavailableDates
      .filter((date) =>
        DateUtils.areSameYearMonthAndDay(props.currentDate, date)
      )
      .map((date) => DateUtils.dateToStringHours(date));
  }, [props.unavailableDates, props.currentDate]);

  const handleOnSelect = (time: string) => {
    setSelectedTimeOption(time);
    props.onChange(time);
  };

  return (
    <Container>
      <Label>Select Time</Label>
      <GridContainer>
        {timeOptions.map((time, index) => {
          const isDisabled = unavailableDates.includes(time);
          if (isDisabled) {
            return (
              <Tooltip
                content="Not available"
                disabled={!isDisabled}
                key={index}
              >
                <TimeOption
                  selected={selectedTimeOption === time}
                  disabled={isDisabled}
                >
                  {time}
                </TimeOption>
              </Tooltip>
            );
          }

          return (
            <TimeOption
              selected={selectedTimeOption === time}
              onClick={() => handleOnSelect(time)}
              disabled={isDisabled}
            >
              {time}
            </TimeOption>
          );
        })}
      </GridContainer>
      <Warning>
        <Icons.WarningIcon
          width="1em"
          height="1em"
          style={{ paddingLeft: "1em" }}
        />
        <CustomLabel>All times are in central Time (Bangladesh)</CustomLabel>
        <Arrow color={theme.colors.darkWarning}>&#62;</Arrow>
      </Warning>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

//make a grid container with 3 rows and 3 columns
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1em 0em;
`;

const TimeOption = styled.span<{ selected: boolean; disabled: boolean }>`
  font-size: 1em;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.darkFontColor};
  padding: 1em;
  cursor: ${(props) => (props.selected ? "default" : "pointer")};
  font-weight: 600;

  ${(props) =>
    props.selected &&
    `
        background-color: ${theme.colors.darkPrimary};
        color: ${theme.colors.lightFontColor};
    `}

  ${(props) =>
    props.disabled &&
    `
        background-color: ${theme.colors.disabledBackground};
        color: ${theme.colors.disabledText};
        cursor: default;
    `}
`;

const Warning = styled.span`
  background-color: ${theme.colors.warning};
  padding: 1em 0em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const CustomLabel = styled(Label)`
  flex-grow: 0.6;
`;

export default TimePicker;
