import React, { createContext } from "react";
//Importação dos components
import { FirstComponent } from "./components/FirstComponent";

// Desestruturando Props e importando Enum
import { SecondComponent } from "./components/SecondComponent";
import { DestructuringComponent, Category } from "./components/Destructuring";

// UseState
import { State } from "./components/State";
import { Context } from "./components/Context";

// Type
type textOrNull = string | null;

// Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //Váriaveis
  const name: string = "Ruan";
  const age: number = 18;
  const isWorking: boolean = false;

  //Funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  };

  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "Opa!";

  // Context API
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Curso de Typescript com React.JS</h1>
        <h2>Olá meu nome é {name}</h2>
        {isWorking && (
          <div>
            <p>Está trabalhando</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Second Component" />
        <DestructuringComponent
          title="Post"
          content="Comment to Post"
          commentsQty={2}
          tags={["fellas", "programming"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variavel my text</p>}
        {mySecondText && <p>Tem texto na variavel my text</p>}
        <Context></Context>
      </div>
    </AppContext.Provider>
  );
}

export default App;
