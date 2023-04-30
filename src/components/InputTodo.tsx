import React from "react";

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};

export const InputTodo = (props: Props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div>
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        className="input-area"
        placeholder=" To enter a To Do"
      />
      <button disabled={disabled} onClick={onClick} className="add-btn">
        ADD
      </button>
    </div>
  );
};
