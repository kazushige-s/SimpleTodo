import React, { useState } from "react";
import { Point } from "tabler-icons-react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["To Do1"]);
  const [completeTodos, setCompleteTodos] = useState(["To Do2"]);

  const onChangeTodoText = (e: any) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") {
      alert("To Doを入力してください");
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <div className="font-zenKurenaido">
      {/* 入力エリア */}
      <div className="1/2 m-2">
        <input
          value={todoText}
          onChange={onChangeTodoText}
          className="input-area"
          placeholder=" To enter a To Do"
        />
        <button onClick={onClickAdd} className="add-btn">
          ADD
        </button>
      </div>

      {/* 未完了のToDo */}
      <div className="area">
        <h1 className="h1">Incomplete</h1>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={Math.random()} className="flex items-center">
                <Point size={16} />
                <li className="list">{todo}</li>
                <button className="btn">Done</button>
                <button className="btn">Delete</button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* 完了のToDo */}
      <div className="area">
        <h1 className="h1">Completed</h1>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={Math.random()} className="flex items-center">
                <Point size={16} />
                <li className="list">{todo}</li>
                <button className="btn">Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
