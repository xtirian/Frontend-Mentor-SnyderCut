import { useState } from "react";
import Header from "./components/header/index.tsx";
import "./App.scss";
import { QuizGridTitle } from "./views/quizz-grid-title.view.tsx";
import { HandleTheme } from "./services/handleTheme.ts";

function App() {
  //HANDLE SUBJECT OF THE QUIZZ

  //START THE GAME
  const [isStarted, setIsStarted] = useState(false);

  //TO DEFINE THE SUBJECT OF THE GAME
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const imgUrl = [
    "icon-accessibility.svg",
    "icon-css.svg",
    "icon-html.svg",
    "icon-js.svg",
  ];

 

  const {theme} = HandleTheme.useTheme()

  


  return (
    <section className={`app-container ${theme}`}>
      <Header />
      <QuizGridTitle />
    </section>
  );
}

export default App;
