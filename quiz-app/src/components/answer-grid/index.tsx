import { useEffect, useState } from "react";
import { ButtonSelectionAnswer } from "../button-selection";

import "./style.scss";
import {ButtonForm} from "../form-button";
import { HandleData } from "../../services/handleData";

interface AnswerTypes {
  option: string[];
  changeQuestion: Function;
}

const AnswerGrid = ({ option, changeQuestion }: AnswerTypes) => {
  const answerOptionsIndexLetter = ["A", "B", "C", "D", "E"];

  const [isSubmited, setIsSubmited] = useState("notSubmited");

  // Check answers

  const [answerControl, setAnswerControl] = useState<string | undefined>(
    undefined
  );

  const [formValidation, setformValidation] = useState(false);

  const {setPoints} = HandleData.getPointsContext()

  useEffect(() => {
    setIsSubmited("notSubmited");
    setAnswerControl(undefined);
  }, [option]);

 

  return (
    <form
      className="questionaryForm"
      onSubmit={(e) => {
        e.preventDefault();

        if (answerControl == undefined) {
          setformValidation(true);          
          return false;
        }

        if (isSubmited === "notSubmited") {
          setIsSubmited("submited");
          setformValidation(false);
          if (answerControl === "correct") {
            setPoints()            
          }
        }

        return false;
      }}
    >
      {option.map((q, index) => (
        <ButtonSelectionAnswer
          key={q}
          answerOption={answerOptionsIndexLetter[index]}
          content={q}
          formCall={setAnswerControl}
          isSubmited={isSubmited}
        />
      ))}
      <ButtonForm status={isSubmited} callBack={changeQuestion} />
      {formValidation && (
        <span className="form_validation"><img src="/icon-error.svg" alt="" />
          Please select an answer
        </span>
      )}
    </form>
  );
};

export default AnswerGrid;
