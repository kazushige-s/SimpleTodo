import React, { FC } from "react";

type Props = {
  color: string;
  children: string;
};

export const ColorfulMessage = (props: Props) => {
  // オブジェクトの分割代入
  const { color, children } = props;

  console.log(props);

  const containtStyle = {
    // オブジェクトのキーと変数名が同じ場合は省略できる
    color,
    fontSize: "18px",
  };

  return <p style={containtStyle}>{children}</p>;
};
