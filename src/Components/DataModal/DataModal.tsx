import React from "react";
import styled from "styled-components";
import Icons from "../../assets";

const DataModal = () => {
  return (
    <RootContainer>
      <Title>VMS data</Title>
      <BoxContainer>
        <Icons.Combined width="150px"/>
        <BoxText>
          Some of the locations in the scan request are at least 10 days old
          since the last time VMS data was uploaded for those locations. Verify
          you uploaded the most recent version of your VMS to guarantee the scan
          request is compared to the most recent VMS information.
        </BoxText>
      </BoxContainer>
      <ButtonsContainer>
        <CommonButton>Cancel request</CommonButton>
        <CommonButton>Upload WMS data</CommonButton>
        <ContainedButton>Continue it looks correct</ContainedButton>
      </ButtonsContainer>
    </RootContainer>
  );
};

const RootContainer = styled.section`
  width: 596px;
  height: 372px;
  background: #ffffff;
  border: 1px solid #dedfe1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  justify-content: space-around;
  font-family: "Objektiv Mk2";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
`;

const Title = styled.a`
  font-family: "Objektiv Mk2";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #250b0c;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1.5em;
  gap: 10px;
  background: rgba(255, 90, 95, 0.1);
  border-radius: 12px;
  align-items: stretch;
`;

const BoxText = styled.a`
  color: #ff5a5f;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const CommonButton = styled.span`
  cursor: pointer;
  color: rgba(0, 132, 137, 1);
  padding: 0.5em 1em;
  font-weight: 500;

  &:hover {
    color: rgba(0, 132, 137, 0.6);
  }
`;

const ContainedButton = styled.button`
  background-color: #ff5a5f;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;

    &:hover {
        background-color: rgba(255, 90, 95, 0.6);
        color: #fff;
    }
`;

export default DataModal;
