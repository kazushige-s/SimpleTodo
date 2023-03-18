import React, { useState } from "react";
import { Point } from "tabler-icons-react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["To Do1", "To Do2"]);
  const [completeTodos, setCompleteTodos] = useState(["To Do2"]);

  //入力エリアに入力された時の処理
  const onChangeTodoText = (e: any) => {
    //変数todoTextを、関数setTodoTextで更新する
    setTodoText(e.target.value);
  };

  //追加ボタンが押された時の処理
  const onClickAdd = (): void => {
    if (todoText === "") {
      alert("To Doを入力してください");
      return;
    }
    //変数newTodosに配列を分割代入する
    const newTodos: string[] = [...incompleteTodos, todoText];
    //変数incompleteTodosを、関数setIncompleteTodosで更新する
    setIncompleteTodos(newTodos);
    //空文字列にすることで、入力エリアを空にする
    setTodoText("");
  };

  const onClickDelete = (i: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <div className="font-zenKurenaido">
      {/* 入力エリア */}
      <div className="m-2">
        <input
          //value属性には、入力された値を保持するためのもの
          value={todoText}
          //onChangeの後には、関数を記述する
          onChange={onChangeTodoText}
          className="input-area"
          placeholder=" To enter a To Do"
        />

        {/* 追加ボタン */}
        {/* onClickAddが押されると、onClickAdd関数が実行される */}
        <button onClick={onClickAdd} className="add-btn">
          ADD
        </button>
      </div>

      {/* 未完了のToDo */}
      <div className="area">
        <h1 className="h1">Incomplete</h1>
        <ul>
          {/* incompleteTodosをmapで回す */}
          {incompleteTodos.map((todo, i) => {
            return (
              <div key={Math.random()} className="flex items-center">
                <Point size={16} />
                <li className="list">{todo}</li>

                {/* 完了ボタン */}
                <button className="btn">Done</button>
                {/* 削除ボタン */}
                <button onClick={() => onClickDelete(i)} className="btn">
                  Delete
                </button>
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
