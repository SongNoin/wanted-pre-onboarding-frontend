import styled from "styled-components";
import { colors } from "../constants/colors";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  dataTestId: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function CommonInput({ onChange, dataTestId, type }: Props) {
  return (
    <StyledInput type={type} data-testid={dataTestId} onChange={onChange} />
  );
}
const StyledInput = styled.input`
  height: 44px;
  padding: 0px 16px;
  border: 1px solid ${colors.ligntMain};
  border-radius: 4px;
`;
