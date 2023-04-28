import * as React from "react";

export interface IDestructuringComponentProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  // Enum
  category: Category;
}

export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P = "Python",
}

export function DestructuringComponent({
  title,
  content,
  commentsQty,
  tags,
  category,
}: IDestructuringComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{content}</h2>
      <p>{commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <p># {tag}</p>
        ))}
      </div>
      <p>{category}</p>
    </div>
  );
}
