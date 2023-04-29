import React, { useState } from "react";
import { IncompleteTodos } from "src/components/IncompleteTodos";
import { InputTodo } from "src/components/InputTodo";
import { CompleteTodo } from "src/components/CompleteTodo";
import { Point } from "tabler-icons-react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([""]);
  const [completeTodos, setCompleteTodos] = useState([""]);

  //入力エリアに入力された時の処理
  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  //追加ボタンが押された時の処理
  const onClickAdd = (): void => {
    if (todoText === "") {
      alert("To Doを入力してください");
      return;
    }
    const newTodos: string[] = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (i: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (i: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(i, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (i: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="font-zenKurenaido">
      {/* 入力エリア */}
      <div className="m-2">
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
        />
      </div>

      {/* 未完了のToDo */}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* 完了のToDo */}
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </div>
  );
}
