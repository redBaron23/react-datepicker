import "./App.css";
import DatePicker from "./Components/DatePicker";
import styled from "styled-components";
import theme from "./styles/theme";
import { Label } from "./styles/CommonStyles";
import TimePicker from "./Components/TimePicker";
import { useMemo } from "react";

interface EventData {
  id: string;
  date: Date;
  email: string;
}

interface Props {
  eventsData: EventData[];
}

function App() {
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

  const handleSubmit = () => {};

  const unavailableDates = useMemo(
    () => eventsData.map((event) => event.date),
    [eventsData]
  );

  return (
    <RootContainer onSubmit={handleSubmit}>
      <Container>
        <HalfContainer>
          <Label>Select Date</Label>
          <DatePicker />
        </HalfContainer>
        <HalfContainer>
          <Input placeholder="Enter your email" required type="email" />
          <TimePicker unavailableDates={unavailableDates} />
        </HalfContainer>
      </Container>
      <Button type="submit">Get Appointment</Button>
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
`;

export default App;
