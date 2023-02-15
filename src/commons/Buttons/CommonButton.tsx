import styled from "styled-components";
import { colors } from "../constants/colors";
import { StyledText } from "../styles/texts";

interface Props {
  onClick: () => void;
  text: string;
  disabled: boolean;
  dataTestId: string;
}

export default function CommonButton({
  onClick,
  text,
  disabled,
  dataTestId,
}: Props) {
  return (
    <StyledButton
      data-testid={dataTestId}
      onClick={onClick}
      disabled={disabled}
    >
      <StyledText.H1>{text}</StyledText.H1>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 44px;
  width: 100%;
  background-color: ${colors.main};
  border: 0px;
  border-radius: 5px;
  color: ${colors.white};
  cursor: pointer;
  :disabled {
    background-color: ${colors.ligntMain};
  }
  :hover {
    background-color: ${colors.ligntMain};
  }
`;
