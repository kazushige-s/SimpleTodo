import React, { FC } from "react";

type Props = {
  color: string;
  message: string;
};

export const ColorfulMessage = (props:Props) => {
  console.log(props);

  const containtStyle = {
    color: props.color,
    fontSize: "18px",
  };

  return <p style={containtStyle}>{props.message}</p>;
};
