import { useState } from "react";
import styled from "styled-components";
import SmallCommonButton from "../../commons/Buttons/SmallCommonButton";
import SmallCommonInput from "../../commons/Inputs/SmallCommonInput";
import { StyledText } from "../../commons/styles/texts";

interface Props {
  content: string;
  isCompleted: boolean;
  todoId: number;
  onChangeCheckBox: (
    id: number,
    todo: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onClickDeleteTodo(id: number): void;
  onClickUpdateTodo(id: number, todo: string, isCompleted: boolean): void;
}

export default function TodoListItem({
  content,
  isCompleted,
  todoId,
  onChangeCheckBox,
  onClickDeleteTodo,
  onClickUpdateTodo,
}: Props) {
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");
  function onChageUpdateTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setUpdateTodo(e.target.value);
  }
  function onClickToggleShowUpdate() {
    setIsShowUpdate(!isShowUpdate);
  }
  return (
    <Wrap>
      <StyledChcekBox
        checked={isCompleted}
        type={"checkbox"}
        onChange={(e) => onChangeCheckBox(todoId, content, e)}
      />
      <ContentWrap>
        {isShowUpdate ? (
          <SmallCommonInput
            placeholder={content}
            onChange={(e) => onChageUpdateTodo(e)}
            dataTestId={"modify-input"}
          />
        ) : (
          <StyledText.P1>{content}</StyledText.P1>
        )}
      </ContentWrap>
      <SmallCommonButton
        onClick={
          isShowUpdate
            ? () => {
                onClickUpdateTodo(todoId, updateTodo, isCompleted);
                onClickToggleShowUpdate();
              }
            : onClickToggleShowUpdate
        }
        text={isShowUpdate ? "제출" : "수정"}
        dataTestId={isShowUpdate ? "submit-button" : "modify-button"}
      />
      {isShowUpdate && (
        <SmallCommonButton
          onClick={onClickToggleShowUpdate}
          text={"취소"}
          dataTestId="cancel-button"
        />
      )}
      <SmallCommonButton
        onClick={() => onClickDeleteTodo(todoId)}
        text={"삭제"}
        dataTestId={"delete-button"}
      />
    </Wrap>
  );
}

const Wrap = styled.li`
  width: 100%;
`;
const ContentWrap = styled.span`
  margin-right: 10px;
`;
const StyledChcekBox = styled.input`
  margin-right: 10px;
`;
