import { checkAnswer } from "../../services/answerHandle";
import { ButtonSelectionAnswer } from "../button-selection";

interface AnswerTypes {
  option: string[];
  answer: string;
  changeQuestion: Function;
}

const AnswerGrid = ({ option, answer, changeQuestion }: AnswerTypes) => {
  const answerOptionsIndexLetter = ["A", "B", "C", "D", "E"];


  // TODO: TRANSFORMAR ISTO EM UM FORM E DEPOIS TRANSFORMAR ESTE BUTTON EM INPUTS
  return (
    <>
      {option.map((q, index) => (
        <ButtonSelectionAnswer key={q}
          answerOption={answerOptionsIndexLetter[index]}
          content={q}
          checkAnswerCallBack={checkAnswer}
        />
      ))}
    </>
  );
};

export default AnswerGrid;
