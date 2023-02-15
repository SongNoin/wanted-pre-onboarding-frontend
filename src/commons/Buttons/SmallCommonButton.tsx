import styled from "styled-components";
import { colors } from "../constants/colors";
import { StyledText } from "../styles/texts";

interface Props {
  onClick: () => void | void;
  text: string;
  dataTestId: string;
}

export default function SmallCommonButton({
  onClick,
  text,
  dataTestId,
}: Props) {
  return (
    <StyledButton data-testid={dataTestId} onClick={onClick}>
      <StyledText.H3>{text}</StyledText.H3>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 15px;
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
