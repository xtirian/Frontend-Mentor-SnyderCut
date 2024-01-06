import { useEffect, useState } from "react";
import { DataTypes, HandleData } from "../../services/handleData";
import { QuestionContainer } from "../../components/title";

import "./style.scss";
import ProgressBar from "../../components/progress-bar";
import AnswerGrid from "../../components/answer-grid";
import { filterSubject } from "../../services/answerHandle";

const QuizGridSubject = () => {
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    const getData = async () => {
      const quizzQuestions = await HandleData.getData();

      setData(quizzQuestions);
    };

    getData();
  }, []);

  // GET THE CORRECT DATA FOR THE CONTENT

  const { content } = HandleData.getSubjectContent();

  const [result, setResult] = useState<DataTypes | undefined>(undefined);

  useEffect(() => {
    try {
      const [newResult] = filterSubject(data, content);

      setResult(newResult);
    } catch (error) {
      console.error(error);
    }
  }, [data]);

  // DEFINE CORE INFOS FOR THE QUESTIONS


  const questionNumberContext = HandleData.getQuestionNumberContext()

  

  const [questionNumberTotal, setQuestionNumberTotal] = useState<number>(0);

  const [question, setQuestion] = useState<string>("");

  const [options, setOptions] = useState<string[]>([]);

  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    if (result !== undefined) {
      setQuestion(result.questions[questionNumberContext.question].question);
      setOptions(result.questions[questionNumberContext.question].options);
      setAnswer(result.questions[questionNumberContext.question].answer);
      setQuestionNumberTotal(result.questions.length);
    }
  }, [result, questionNumberContext.question]);

  // change questions

  function changeQuestion() {
    if (questionNumberContext.question + 1 < questionNumberTotal) {
      questionNumberContext.setQuestion(questionNumberContext.question + 1);
      return;
    } else {
      throw new Error("There is no more questions")
    }    
  }

  return (
    <section className="qizz-subject-container">
      <div className="question-container">
        <QuestionContainer
          questionNumber={questionNumberContext.question}
          title={question}
          questionTotal={questionNumberTotal}
        />
        {questionNumberTotal > 0 && (
          <ProgressBar initial={questionNumberContext.question} total={questionNumberTotal} />
        )}
      </div>

      <div className="answer-container">
        <AnswerGrid option={options} answer={answer} changeQuestion={changeQuestion}  />
      </div>
    </section>
  );
};

export default QuizGridSubject;
