import * as React from "react";

export interface ISecondComponentProps {
  name: string;
}

export function SecondComponent({ name }: ISecondComponentProps) {
  return (
    <div>
      <h1>Meu segundo componente</h1>
      <p>O nome dele é {name}</p>
    </div>
  );
}
