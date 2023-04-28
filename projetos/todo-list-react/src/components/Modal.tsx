import React, { ReactNode } from "react";

//CSS
import styles from "./Modal.module.css";

export interface IModalProps {
  children: ReactNode;
}

export function Modal({ children }: IModalProps) {
  const closeModal = () => {
    const modal = document.querySelector("#modal") as HTMLDivElement;
    modal.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}
