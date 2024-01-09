import { HandleData } from "../../services/handleData";
import "./style.scss";

interface ButtonFormProps {
  status: string;
  callBack?: Function;
  resetForm?: Function;
}

export const ButtonForm = ({
  status,
  callBack,
  resetForm,
}: ButtonFormProps) => {
  if (status == "submited") {
    return (
      <button tabIndex={0}
      title={`Press Enter to access the Next Question`}
      role="definition"
      aria-label={`Press Enter to access the Next Question`}
        type="button"
        onClick={() => {
          resetForm && resetForm("notSubmited");
          callBack && callBack();
        }}
      >
        Next Question
      </button>
    );
  }

  if (status == "notSubmited") {
    return (
      <button
      title={`Press Enter to submit`}
      role="definition"
      aria-label={`Press Enter to submit`}
        type={"submit"}
        onClick={() => {
          if (status === "notSubmited") {
            resetForm && resetForm("submited");
          }
        }}
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
