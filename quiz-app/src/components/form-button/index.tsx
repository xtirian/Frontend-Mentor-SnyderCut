import { useContext } from "react";
import { HandleData } from "../../services/handleData";
import "./style.scss";
import { FormSubmitionContext } from "../../services/subjectContext";

interface ButtonFormProps {
  callBack?: Function;
}

export const ButtonForm = ({
  callBack,
}: ButtonFormProps) => {

  const {isSubmited ,setIsSubmited } = useContext(FormSubmitionContext)

  if (isSubmited == "submited") {
    return (
      <button
        tabIndex={0}
        title={`Press Enter to access the Next Question`}
        role="definition"
        aria-label={`Press Enter to access the Next Question`}
        type="button"
        onClick={() => {
          setIsSubmited("notSubmited");
          callBack && callBack();
        }}
      >
        Next Question
      </button>
    );
  }

  if (isSubmited == "notSubmited") {
    return (
      <button
        title={`Press Enter to submit`}
        role="definition"
        aria-label={`Press Enter to submit`}
        type='submit'
      >
        Submit Answer
      </button>
    );
  }
};

export const ResetButton = () => {
  const { setIsStarted } = HandleData.getStartContext();
  const { setQuestion } = HandleData.getQuestionNumberContext();
  const { setPoints } = HandleData.getPointsContext();

  return (
    <button
      type={"button"}
      onClick={() => {
        setQuestion(0);
        setPoints(0);
        setIsStarted();
      }}
      className="reset_button"
    >
      Play Again
    </button>
  );
};
