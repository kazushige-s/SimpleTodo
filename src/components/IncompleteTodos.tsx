import React from "react";
import { Point } from "tabler-icons-react";

type Props = {
  incompleteTodos: string[];
  onClickComplete: (i: number) => void;
  onClickDelete: (i: number) => void;
};

export const IncompleteTodos = (props: Props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;

  return (
    <div className="area">
      <h1 className="h1">Incomplete</h1>
      <ul>
        {incompleteTodos.map((todo, i) => {
          return (
            <li className="list" key={Math.random()}>
              <div className="flex items-center">
                <Point size={16} />
                {todo}

                {/* 完了ボタン */}
                <button
                  onClick={() => {
                    onClickComplete(i);
                  }}
                  className="btn"
                >
                  Done
                </button>

                {/* 削除ボタン */}
                <button onClick={() => onClickDelete(i)} className="btn">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
