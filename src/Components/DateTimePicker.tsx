import styled from "styled-components";
import React, { useMemo, useState } from "react";
import StringUtils from "../Utils/StringUtils";
import { Label } from "../styles/CommonStyles";
import theme from "../styles/theme";
import DateUtils from "../Utils/DateUtils";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

interface EventData {
  id: string;
  date: Date;
  email: string;
}

interface EventPayload {
  email: string;
  date: Date;
}

interface Props {
  eventsData: EventData[];
  onSend: (eventPaypload: EventPayload) => void;
}

function DateTimePicker(props: Props) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const unavailableDates = useMemo(
    () => props.eventsData.map((event) => event.date),
    [props.eventsData]
  );

  const isButtonDisabled = useMemo(
    () =>
      !currentDate || !currentTime || !StringUtils.isValidEmail(currentEmail),
    [currentDate, currentTime, currentEmail]
  );

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentEmail(event.target.value);
  };

  const onChangeTime = (time: string) => {
    setCurrentTime(time);
  };

  const onChangeDate = (date: Date) => {
    setCurrentDate(date);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dateToSubmit = DateUtils.stringToDateHours(currentDate!, currentTime);
    const eventPayload = {
      date: dateToSubmit,
      email: currentEmail,
    } as EventPayload;

    props.onSend(eventPayload);
  };

  return (
    <RootContainer onSubmit={handleSubmit}>
      <Container>
        <HalfContainer>
          <Label>Select Date</Label>
          <DatePicker onChange={onChangeDate} currentDate={currentDate} />
        </HalfContainer>
        <HalfContainer>
          <Input
            placeholder="Enter your email"
            required
            type="email"
            onChange={handleChangeEmail}
          />
          <TimePicker
            unavailableDates={unavailableDates}
            onChange={onChangeTime}
            currentDate={currentDate}
          />
        </HalfContainer>
      </Container>
      <Button type="submit" disabled={isButtonDisabled}>
        Get Appointment
      </Button>
    </RootContainer>
  );
}

const RootContainer = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4em;
  align-items: center;
`;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1em;
  width: 100%;
  height: 100%;
`;

const HalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1em;
  width: 48%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 0px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${theme.colors.lightFontColor};
  font-size: 1.5em;

  &:focus-visible {
    outline: none;
  }
  ::placeholder {
    color: ${theme.colors.lightFontColor};
  }
`;

const Button = styled.button`
  width: 12em;
  padding: 1em 0px;
  background-color: ${theme.colors.darkPrimary};
  color: ${theme.colors.lightFontColor};
  font-size: 1.25em;
  border-radius: 10px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${theme.colors.disabledButtonBackground};
    color: ${theme.colors.disabledButtonText};
    cursor: not-allowed;
    border: none;
  }
`;

export default DateTimePicker;
