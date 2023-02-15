import styled from "styled-components";
import CommonButton from "../../commons/Buttons/CommonButton";
import CommonInput from "../../commons/Inputs/CommonInput";
import { StyledPadding } from "../../commons/styles/padding";
import { StyledText } from "../../commons/styles/texts";
import { ITodo } from "../../commons/types/ITodo";
import TodoListItem from "./TodoListItem";

interface Props {
  onClickCreateTodo(): void;
  todos: ITodo[];
  onChangeNewTodo: any;
  onChangeCheckBox: (
    id: number,
    todo: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onClickDeleteTodo(id: number): void;
  onClickUpdateTodo(id: number, todo: string, isCompleted: boolean): void;
}

export default function TodoPresenter({
  onChangeNewTodo,
  onClickCreateTodo,
  onChangeCheckBox,
  onClickDeleteTodo,
  onClickUpdateTodo,
  todos,
}: Props) {
  return (
    <Wrap>
      <StyledText.H1>나의 투두</StyledText.H1>
      <StyledPadding height={30} />
      <CommonInput
        onChange={onChangeNewTodo}
        dataTestId={"new-todo-input"}
        placeholder={"투두를 입력해주세요"}
      />
      <StyledPadding height={30} />
      <CommonButton
        text="투두 추가"
        onClick={onClickCreateTodo}
        disabled={false}
        dataTestId={"new-todo-add-button"}
      />
      <StyledPadding height={50} />
      <TodoListWrap>
        <StyledText.H1>투두 목록</StyledText.H1>
        <StyledPadding height={20} />
        {todos.length === 0 && (
          <StyledText.P1>현재 등록된 투두가 없습니다!</StyledText.P1>
        )}
        {todos.map((el) => {
          return (
            <TodoListItem
              todoId={el.id}
              content={el.todo}
              key={el.id}
              isCompleted={el.isCompleted}
              onChangeCheckBox={onChangeCheckBox}
              onClickDeleteTodo={onClickDeleteTodo}
              onClickUpdateTodo={onClickUpdateTodo}
            />
          );
        })}
      </TodoListWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const TodoListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
