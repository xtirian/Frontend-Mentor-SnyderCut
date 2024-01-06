import TitleContainer from "../components/title";
import { ButtonSelectionTitle } from "../components/button-selection";

import './style.scss';

export const QuizGridTitle = () => {


  function callContent(item:string){
    console.log(item)
  }

  return (
    <div className="quizz_grid-container">
      <TitleContainer />
      <div className="quizz_grid-button_grid">
        <ButtonSelectionTitle image={"icon-html.svg"} content={"HTML"} callBack={callContent} />
        <ButtonSelectionTitle image={"icon-css.svg"} content={"CSS"} callBack={callContent} />
        <ButtonSelectionTitle image={"icon-js.svg"} content={"JavaScript"} callBack={callContent} />
        <ButtonSelectionTitle image={"icon-accessibility.svg"} content={"Accessibility"} callBack={callContent} />
      </div>
    </div>
  );
};
