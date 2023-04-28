import { useState, ChangeEvent } from "react";
import * as React from "react";

export interface IStateProps {}

export function State(props: IStateProps) {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
