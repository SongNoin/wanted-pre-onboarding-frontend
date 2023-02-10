import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../../commons/apis/todo/createTodo";
import getTodos from "../../commons/apis/todo/getTodos";
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
  }, [todos]);

  function getTodosData() {
    getTodos().then((todoData) => setTodos(todoData));
  }

  function onChangeNewTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function onClickCreateTodo() {
    createTodo({ todo: newTodo });
  }
  return (
    <TodoPresenter
      onChangeNewTodo={onChangeNewTodo}
      onClickCreateTodo={onClickCreateTodo}
      todos={todos}
    />
  );
}
