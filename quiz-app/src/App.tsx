import Header from "./components/header/index.tsx";
import "./App.scss";
import { QuizGridTitle } from "./views/quizz-grid-title/quizz-grid-title.view.tsx";
import { HandleTheme } from "./services/handleTheme.ts";
import { HandleData } from "./services/handleData.ts";
import QuizGame from "./views/quiz-game/quiz-game.view.tsx";

function App() {
  //HANDLE SUBJECT OF THE QUIZZ

  //START THE GAME
  const { isStarted } = HandleData.getStartContext();

  const { theme } = HandleTheme.useTheme();

  return (
    <section className={`app-container ${theme}`}>
      <Header />
      {!isStarted ? <QuizGridTitle /> : <QuizGame />}
    </section>
  );
}

export default App;
