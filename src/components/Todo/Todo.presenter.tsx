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
}

export default function TodoPresenter({
  onChangeNewTodo,
  onClickCreateTodo,
  todos,
}: Props) {
  return (
    <Wrap>
      <StyledText.H1>나의 투두</StyledText.H1>
      <StyledPadding height={30} />
      <CommonInput onChange={onChangeNewTodo} dataTestId={"new-todo-input"} />
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
        {todos.map((el) => {
          return <TodoListItem content={el.todo} key={el.id} />;
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
