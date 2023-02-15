import styled from "styled-components";
import { colors } from "../constants/colors";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  dataTestId: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function SmallCommonInput({
  onChange,
  dataTestId,
  type,
  placeholder,
}: Props) {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      data-testid={dataTestId}
      onChange={onChange}
    />
  );
}
const StyledInput = styled.input`
  height: 20px;
  padding: 0px 4px;
  border: 1px solid ${colors.ligntMain};
  border-radius: 4px;
`;
