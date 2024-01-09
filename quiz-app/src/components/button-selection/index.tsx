import { HandleData } from "../../services/handleData";
import { HandleTheme } from "../../services/handleTheme";
import { checkAnswer } from "../../services/answerHandle";
import { useEffect, useRef, useState } from "react";
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
      tabIndex={0}
      title={`Press Enter to access the quiz: ${content}`}
      role="definition"
      aria-label={`Press Enter to access the quiz: ${content}`}
      className={`button_selection-container ${theme}`}
      onClick={() => {
        startCallBack();
        subjectCallBack(content);
      }}
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          startCallBack();
          subjectCallBack(content);
        }
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

  const checkBoxRef = useRef<HTMLInputElement>(null)


  const { theme } = HandleTheme.useTheme();
  const subject = HandleData.getSubjectContent();
  const questionId = HandleData.getQuestionNumberContext();

  const [answerControl, setAnswerControl] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const startQuestion = async () => {
      if (subject.content != undefined && isSubmited == "submited") {
        const check = await checkAnswer(
          content,
          subject.content,
          questionId.question
        );
        setAnswerControl(check);

        formCall(check);
      }
    };

    startQuestion();
  }, [isSubmited]);

  function feedback() {
    if (answerControl == "correct") {
      return <img src={"/icon-correct.svg"} alt="" />;
    }
    if (answerControl == "wrong") {
      return <img src={"/icon-incorrect.svg"} alt="" />;
    }
  }

  return (
    <label className={`button_answer-container ${theme} ${isSubmited}`}tabIndex={1} role="definition" aria-label={`You are selecting the answer: ${content}`} onKeyDown={(event) => {
      if (event.key === 'Enter') {
        // Ao pressionar Enter, clique no input associado
        if (checkBoxRef.current) {
          checkBoxRef.current.click();
        }
      }
    }} >
      <input
        type="radio"
        className="radio-button"
        name={`question${questionId}`}
        disabled={isSubmited === "submited" && true}
        ref={checkBoxRef}
      />

      <p className={`answer_option ${isSubmited} ${answerControl}`}>
        {answerOption}
      </p>
      <p className={`button_selection-content`}>{content}</p>
      <span
        className={`border_handle ${isSubmited} ${answerControl}`}
        
        title={`You are selecting the answer: ${content}`}
        
        
      ></span>
      <span className={`feedback_handle ${isSubmited}  ${answerControl}`}>
        {feedback()}
      </span>
    </label>
  );
};

