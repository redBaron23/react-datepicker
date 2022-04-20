import "./App.css";
import DatePicker from "./Components/DatePicker";
import styled from "styled-components";
import theme from "./styles/theme";
import { Label } from "./styles/CommonStyles";
import TimePicker from "./Components/TimePicker";
import { useMemo, useState } from "react";
import DateUtils from "./Utils/DateUtils";
import StringUtils from "./Utils/StringUtils";

interface EventData {
  id: string;
  date: Date;
  email: string;
}

interface Props {
  eventsData: EventData[];
}

const eventsData = [
  // date hours from 9.00 AM to 5.00 PM with 1 hour interval
  {
    id: "1",
    date: new Date("2020-06-01T09:00:00"),
    email: "asd@asd.com",
  },
  {
    id: "2",
    date: new Date("2020-06-01T10:00:00"),
    email: "papaa@asd.com",
  },
  {
    id: "3",
    date: new Date("2020-06-01T11:00:00"),
    email: "asd",
  },
];

function App() {
  const [currentDate, setCurrentDate] = useState<Date>();
  const [currentTime, setCurrentTime] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const unavailableDates = useMemo(
    () => eventsData.map((event) => event.date),
    [eventsData]
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

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const dateToSubmit = DateUtils.stringToDateHours(currentDate!, currentTime);
    const eventPayload = {
      date: dateToSubmit,
      email: currentEmail,
    };

    console.log(eventPayload);
  };

  return (
    <RootContainer onSubmit={handleSubmit}>
      <Container>
        <HalfContainer>
          <Label>Select Date</Label>
          <DatePicker onChange={onChangeDate} />
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

export default App;
