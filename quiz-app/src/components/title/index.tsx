import "./style.scss";

export const TitleContainer = () => {
  return (
    <div className="title">
      <h1>
        Welcome to the <br />
        <span>Frontend Quiz!</span>
      </h1>
      <p>Pick a subject to get started.</p>
    </div>
  );
};

interface AnswerType{
  questionNumber: number
  questionTotal: number
  title: string
}

export const QuestionContainer = ({questionNumber, questionTotal, title}: AnswerType) => {

  return (
    <div className="title">
      <p className="question_number">Question {questionNumber +1} of {questionTotal}</p>
      <h2 className="question-title">
        {title}
      </h2>     
    </div>
  )

}
