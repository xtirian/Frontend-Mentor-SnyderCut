import { ResetButton } from "../../components/form-button";
import ResultBanner from "../../components/result-banner";
import { ResultTitle } from "../../components/title";
import { HandleData } from "../../services/handleData";
import QuizGridSubject from "../quiz-grid-subject/quizz-grid-subject.view";
import "./style.scss";

const QuizGame = () => {
  const { question } = HandleData.getQuestionNumberContext();

  return (
    <>
      {question < 10 ? (
        <QuizGridSubject />
      ) : (
        <section className="result-container">
          <div>
            <ResultTitle />
          </div>
          <div className="game_result-container">
            <ResultBanner />
            <ResetButton />
          </div>
        </section>
      )}
    </>
  );
};

export default QuizGame;
