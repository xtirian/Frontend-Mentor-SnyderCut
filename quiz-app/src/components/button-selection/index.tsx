import { HandleData } from "../../services/handleData";
import { HandleTheme } from "../../services/handleTheme";
import { checkAnswer } from "../../services/answerHandle";
import { useEffect, useState } from "react";
import "./style.scss";

interface ButtonSelectionType {
  image: string;
  content: string;
  startCallBack: Function;
  subjectCallBack: Function;
}

export const ButtonSelectionTitle = ({
  image,
  content,
  startCallBack,
  subjectCallBack,
}: ButtonSelectionType) => {
  const { theme } = HandleTheme.useTheme();

  return (
    <div
      className={`button_selection-container ${theme}`}
      onClick={() => {
        startCallBack();
        subjectCallBack(content);
      }}
    >
      <div className={`button_selection-image-container ${content}`}>
        <img src={`/${image}`} alt="" />
      </div>
      <p className={`button_selection-content`}>{content}</p>
    </div>
  );
};

interface ButtonAnswerType {
  answerOption: string;
  content: string;
  isSubmited: string;
  formCall: Function;
}

export const ButtonSelectionAnswer = ({
  answerOption,
  content,
  isSubmited,
  formCall,
}: ButtonAnswerType) => {
  const { theme } = HandleTheme.useTheme();
  const subject = HandleData.getSubjectContent();
  const questionId = HandleData.getQuestionNumberContext();

  const [answerControl, setAnswerControl] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const startQuestion = async () => {
      if (subject.content != undefined) {
        const check = await checkAnswer(
          content,
          subject.content,
          questionId.question
        );        
        setAnswerControl(check);
      }

      
    };

    startQuestion()
  }, [questionId]);

  function feedback() {
    if (answerControl == "correct") {
      return <img src={"/icon-correct.svg"} alt="" />;
    }
    if (answerControl == "wrong") {
      return <img src={"/icon-incorrect.svg"} alt="" />;
    }
  }

  return (
    <label
      className={`button_answer-container ${theme} ${isSubmited}`}
      onClick={async () => {
        if (subject.content != undefined) {
          const check = await checkAnswer(
            content,
            subject.content,
            questionId.question
          );

          formCall(check);
        }
      }}
    >
      <input
        type="radio"
        className="radio-button"
        name={`question${questionId}`}
        disabled={isSubmited === "submited" && true}
      />

      <p className={`answer_option ${isSubmited} ${answerControl}`}>
        {answerOption}
      </p>
      <p className={`button_selection-content`}>{content}</p>
      <span className={`border_handle ${isSubmited} ${answerControl}`}></span>
      <span className={`feedback_handle ${isSubmited}  ${answerControl}`}>{feedback()}</span>
    </label>
  );
};

//TODO: COLOCAR O FEEDBACK DA QUESTÃO CORRETA
