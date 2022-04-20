import { useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import theme from "../../styles/theme";
import DateUtils from "../../Utils/DateUtils";
import DatepickerContext from "./datepickerContext";

interface Props {
  open: boolean;
  closeModal: () => void;
  selectedMonth: number;
  trigger: JSX.Element;
}

const MonthModal = (props: Props) => {
  const { goToDate, activeDate } = useContext(DatepickerContext);

  const isMonthSelected = (month: string) => {
    const monthName = DateUtils.getMonthNameByNumber(props.selectedMonth);
    return monthName === month;
  };

  const handleSelectMonth = (month: string) => {
    const monthNumber = DateUtils.getMonthNumberByName(month);
    const newDate = DateUtils.changeMonth(activeDate, monthNumber);

    goToDate(newDate);
    props.closeModal();
  };

  return (
    <StyledPopup
      trigger={props.trigger}
      closeOnDocumentClick
      onClose={props.closeModal}
      position="bottom center"
    >
      <Modal>
        <MonthContainer>
          {DateUtils.getMonthsNames().map((month) => (
            <Month
              key={month}
              selected={isMonthSelected(month)}
              onClick={() => handleSelectMonth(month)}
            >
              {month}
            </Month>
          ))}
        </MonthContainer>
      </Modal>
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)`
  &-content {
    border-radius: 5px;
    padding: 0;
    width: auto !important;
  }
  &-arrow {
    visibility: hidden;
  }
`;

const Modal = styled.div``;

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

const Month = styled.div<{ selected: boolean }>`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
    background: ${theme.colors.lightBlue};
    font-weight: bold;
    color: ${theme.colors.lightPrimary};
  `}
`;

export default MonthModal;
