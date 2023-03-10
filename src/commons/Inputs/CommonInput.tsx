import styled from "styled-components";
import { colors } from "../constants/colors";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  dataTestId: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function CommonInput({
  onChange,
  dataTestId,
  type,
  placeholder,
}: Props) {
  return (
    <StyledInput
      type={type}
      data-testid={dataTestId}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 16px;
  border: 1px solid ${colors.ligntMain};
  border-radius: 4px;
`;
