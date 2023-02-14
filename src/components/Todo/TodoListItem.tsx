import styled from "styled-components";
import SmallCommonButton from "../../commons/Buttons/SmallCommonButton";
import { StyledText } from "../../commons/styles/texts";

interface Props {
  content: string;
}

export default function TodoListItem({ content }: Props) {
  return (
    <Wrap>
      <StyledChcekBox type={"checkbox"} />
      <StyledText.P1>{content}</StyledText.P1>
      <SmallCommonButton text={"수정"} dataTestId={"modify-button"} />
      <SmallCommonButton text={"삭제"} dataTestId={"delete-button"} />
    </Wrap>
  );
}

const Wrap = styled.li`
  width: 100%;
`;

const StyledChcekBox = styled.input`
  margin-right: 10px;
`;
