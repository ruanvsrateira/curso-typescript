import { useContext, Fragment } from "react";
import { AppContext } from "../App";

export interface IContextProps {}

export function Context(props: IContextProps) {
  const details = useContext(AppContext);

  return (
    <Fragment>
      {details && (
        <div>
          <h2>Liguagem {details.language}</h2>
          <h2>FW {details.framework}</h2>
          <h2>Projetos {details.projects}</h2>
        </div>
      )}
    </Fragment>
  );
}
