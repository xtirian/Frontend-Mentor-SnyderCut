import { useContext, useEffect, useState } from "react";
import { ButtonSelectionAnswer } from "../button-selection";

import "./style.scss";
import { ButtonForm } from "../form-button";
import { HandleData } from "../../services/handleData";
import { FormSubmitionContext } from "../../services/subjectContext";

interface AnswerTypes {
  option: string[];
  changeQuestion: Function;
}

const AnswerGrid = ({ option, changeQuestion }: AnswerTypes) => {
  const answerOptionsIndexLetter = ["A", "B", "C", "D", "E"];

  const { isSubmited, setIsSubmited } = useContext(FormSubmitionContext);

  // Check answers

  const [answerControl, setAnswerControl] = useState<string | undefined>(
    undefined
  );

  const [formValidation, setformValidation] = useState(false);

  const { setPoints } = HandleData.getPointsContext();

  useEffect(() => {
    setAnswerControl(undefined);
  }, [option]);

  return (
    <>
      <form
        className="questionaryForm"
        onSubmit={(e) => {
          e.preventDefault();

          if (answerControl == "correct") {
            console.log("ping");
            setIsSubmited("submited");
            setformValidation(false);
            setPoints();
            return;
          }

          if (answerControl == "wrong") {
            setIsSubmited("submited");
            setformValidation(false);
            console.log("pong");
            return;
          }

          if (answerControl == undefined) {
            setformValidation(true);
            return;
          }

          console.log(answerControl);
        }}
      >
        {option.map((q, index) => (
          <ButtonSelectionAnswer
            key={q}
            answerOption={answerOptionsIndexLetter[index]}
            content={q}
            formCall={setAnswerControl}
          />
        ))}
        {isSubmited == "notSubmited" && (
          <ButtonForm callBack={changeQuestion} />
        )}
      </form>
      {isSubmited == "submited" && <ButtonForm callBack={changeQuestion} />}

      {formValidation && (
        <span
          className="form_validation"
          tabIndex={0}
          title={`Please select an answer`}
          role="alert"
          aria-label={`Please select an answer`}
        >
          <img src="/icon-error.svg" alt="" />
          Please select an answer
        </span>
      )}
    </>
  );
};

export default AnswerGrid;
