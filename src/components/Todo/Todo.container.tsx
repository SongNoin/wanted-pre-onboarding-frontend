import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../../commons/apis/todo/createTodo";
import { deleteTodo } from "../../commons/apis/todo/deleteTodo";
import getTodos from "../../commons/apis/todo/getTodos";
import { updateTodo } from "../../commons/apis/todo/updateTodo";
import { ITodo } from "../../commons/types/ITodo";
import { isLogin } from "../../commons/utils/auth/isLogin";
import TodoPresenter from "./Todo.presenter";

export default function TodoContainer() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (!isLogin) {
      navigate("/signin");
    }
    getTodosData();
  }, []);

  function getTodosData() {
    getTodos().then((todoData) => setTodos(todoData));
  }

  function onChangeNewTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function onClickCreateTodo() {
    createTodo({ todo: newTodo }).then(() => getTodosData());
  }

  function onChangeCheckBox(
    id: number,
    todo: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const isCompleted = e.target.checked;
    updateTodo(id, { todo, isCompleted }).then(() => getTodosData());
  }

  function onClickUpdateTodo(id: number, todo: string, isCompleted: boolean) {
    if (todo === "") {
      alert("수정할 내용이 입력되지 않았습니다.");
      return;
    }
    updateTodo(id, { todo, isCompleted }).then(() => getTodosData());
  }

  function onClickDeleteTodo(id: number) {
    deleteTodo(id).then(() => getTodosData());
  }

  return (
    <TodoPresenter
      onChangeNewTodo={onChangeNewTodo}
      onClickCreateTodo={onClickCreateTodo}
      onChangeCheckBox={onChangeCheckBox}
      onClickDeleteTodo={onClickDeleteTodo}
      onClickUpdateTodo={onClickUpdateTodo}
      todos={todos}
    />
  );
}
