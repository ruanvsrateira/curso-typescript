import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

//CSS
import styles from "./TaskForm.module.css";

//Interface
import { ITask } from "../interfaces/task";

export interface ITaskFormProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(task: ITask): void;
}

export function TaskForm({
  btnText,
  taskList,
  task,
  setTaskList,
  handleUpdate,
}: ITaskFormProps) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate({ id, title, difficulty });
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);

      console.log(taskList);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(Number(e.target.value));
    }
  };

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          placeholder="titulo da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="title">Dificuldade</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
}
