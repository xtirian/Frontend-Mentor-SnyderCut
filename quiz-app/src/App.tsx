import Header from "./components/header/index.tsx";
import "./App.scss";
import { QuizGridTitle } from "./views/quizz-grid-title/quizz-grid-title.view.tsx";
import { HandleTheme } from "./services/handleTheme.ts";
import { HandleData } from "./services/handleData.ts";
import QuizGridSubject from "./views/quiz-grid-subject/quizz-grid-subject.view.tsx";

function App() {
  //HANDLE SUBJECT OF THE QUIZZ

  //START THE GAME
  const { isStarted } = HandleData.getStartContext();

 
  const { theme } = HandleTheme.useTheme();

  return (
    <section className={`app-container ${theme}`}>
      <Header />      
        {!isStarted?<QuizGridTitle />:<QuizGridSubject />}

    </section>
  );
}

export default App;
