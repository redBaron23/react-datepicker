import { useState } from "react";
import styled from "styled-components";
import Icons from "../../assets";
import { Arrow, Label } from "../../styles/CommonStyles";
import theme from "../../styles/theme";

//Make an array with 9 elements as time options
const timeOptions = [
  "12:00 AM",
  "12:30 AM",
  "1:00 AM",
  "1:30 AM",
  "2:00 AM",
  "2:30 AM",
  "4:00 AM",
  "4:30 AM",
  "5:00 AM",
];

const TimePicker = () => {
  const [selectedTimeOption, setSelectedTimeOption] = useState("");

  return (
    <Container>
      <Label>Select Time</Label>
      <GridContainer>
        {timeOptions.map((time, index) => {
          return (
            <TimeOption
              key={index}
              selected={selectedTimeOption === time}
              onClick={() => setSelectedTimeOption(time)}
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
        <Arrow>&#62;</Arrow>
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

const TimeOption = styled.span<{ selected: boolean }>`
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
`

export default TimePicker;
