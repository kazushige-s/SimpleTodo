import React from "react";

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export const InputTodo = (props: Props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div>
      <input
        value={todoText}
        onChange={onChange}
        className="input-area"
        placeholder=" To enter a To Do"
      />
      <button onClick={onClick} className="add-btn">
        ADD
      </button>
    </div>
  );
};
