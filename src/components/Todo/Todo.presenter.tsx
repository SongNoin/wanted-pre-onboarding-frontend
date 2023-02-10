import styled from "styled-components";
import { ITodo } from "../../commons/types/ITodo";

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
      <input onChange={onChangeNewTodo}></input>
      <button onClick={onClickCreateTodo}>할 일 추가</button>
      {todos.map((el) => {
        return <div key={el.id}>{el.todo}</div>;
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
