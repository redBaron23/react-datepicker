import "./App.css";
import DateTimePicker from "./Components/DateTimePicker";
import React from "react";
import DataModal from "./Components/DataModal/DataModal";
import styled from "styled-components";

const eventsData = [
  // date hours from 9.00 AM to 5.00 PM with 1 hour interval
  {
    id: "1",
    date: new Date("2020-06-01T09:00:00"),
    email: "asd@asd.com",
  },
  {
    id: "2",
    date: new Date("2022-04-20T12:00:00"),
    email: "papaa@asd.com",
  },
  {
    id: "3",
    date: new Date("2022-04-21T13:00:00"),
    email: "asd",
  },
];

function App() {
  return (
    // <DateTimePicker
    //   eventsData={eventsData}
    //   onSend={(event) => console.log(event)}
    // />
    <Container>
      <DataModal />
    </Container>
  );
}

const Container = styled.div`
  padding: 5em;
`;

export default App;
