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
          className="rounded-lg border border-gray-300 bg-gray-50 p-1 py-2.5 text-sm text-gray-900 shadow focus:border-blue-500"
          placeholder=" To enter a To Do"
        />
        <button
          onClick={onClickAdd}
          className="mx-2 my-2 rounded-lg bg-blue-600 p-1 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
        >
          ADD
        </button>
      </div>

      {/* 未完了のToDo */}
      <div className="m-2 w-96 rounded-lg bg-gray-200 p-2">
        <h1 className="my-2 text-center align-middle">Incomplete</h1>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={Math.random()} className="flex items-center">
                <Point size={16} />
                <li className="m-2 font-medium">{todo}</li>
                <button className="mx-1 my-1 rounded-lg bg-blue-600 px-2.5 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none">
                  Done
                </button>
                <button className="mx-1 my-1 rounded-lg bg-blue-600 px-2.5 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none">
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* 完了のToDo */}
      <div className="m-2 w-96 rounded-lg bg-gray-200 p-2">
        <h1 className="my-2 text-center align-middle">Completed</h1>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={Math.random()} className="flex items-center">
                <Point size={16} />
                <li className="m-2 font-medium">{todo}</li>
                <button className="mx-1 my-1 rounded-lg bg-blue-600 px-2.5 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none">
                  Back
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
