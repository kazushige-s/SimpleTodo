import React from "react";
import { Point } from "tabler-icons-react";

type Props = {
  completeTodos: string[];
  onClickBack: (i: number) => void;
};

export const CompleteTodo = (props: Props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div>
      <div className="area">
        <h1 className="h1">Completed</h1>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <div key={Math.random()} className="flex items-center">
                <Point size={16} />
                <li className="list">{todo}</li>
                <button onClick={() => onClickBack(i)} className="btn">
                  Back
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
