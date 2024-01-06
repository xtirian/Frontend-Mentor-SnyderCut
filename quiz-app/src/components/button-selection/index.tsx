import { HandleData } from "../../services/handleData";
import { HandleTheme } from "../../services/handleTheme";
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
  checkAnswerCallBack: Function;
}

export const ButtonSelectionAnswer = ({
  answerOption,
  content,
  checkAnswerCallBack,
}: ButtonAnswerType) => {
  const { theme } = HandleTheme.useTheme();

  const subject = HandleData.getSubjectContent();
  const questionId = HandleData.getQuestionNumberContext();

  return (
    <div
      className={`button_selection-container ${theme}`}
      onClick={() => {
        checkAnswerCallBack(content, subject.content, questionId.question );
      }}
    >
      <div className={`button_selection-image-container ${content}`}>
        <p>{answerOption}</p>
      </div>
      <p className={`button_selection-content`}>{content}</p>
    </div>
  );
};
