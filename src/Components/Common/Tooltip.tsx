import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

interface Props {
  content: string;
  children: JSX.Element;
  disabled: boolean;
}

const Tooltip = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popup
      disabled={props.disabled}
      trigger={
        <Container
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {props.children}
        </Container>
      }
      position="bottom center"
      closeOnDocumentClick
      open={open}
    >
      <span> {props.content} </span>
    </Popup>
  );
};

const Container = styled.div`
  display: grid;
`;

export default Tooltip;
