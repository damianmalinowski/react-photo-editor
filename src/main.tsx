import React from "react";

export const AddNumbers = (a: number, b: number) => {
  return a + b;
};

export const AddNumberComponent: React.FC<{
  a: number;
  b: number;
}> = (props) => {
  const result = AddNumbers(props.a, props.b);
  return (
    <div>
      <div>
        <span>{props.a}</span>
        <b>+</b>
        <span>{props.b}</span>
      </div>
      <h1>{result}</h1>
    </div>
  );
};
