import TitleContainer from "../../components/title";
import { ButtonSelectionTitle } from "../../components/button-selection";

import "./style.scss";
import { DataTypes, HandleData } from "../../services/handleData";
import { useEffect, useState } from "react";

export const QuizGridTitle = () => {
  const { setIsStarted } = HandleData.getStartContext();
  const { setContent } = HandleData.getSubjectContent();

  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    const getData = async () => {
      const quizzQuestions = await HandleData.getData();

      setData(quizzQuestions);
    };

    getData();
  }, []);



  return (
    <div className="quizz_grid-container">
      <TitleContainer />
      <div className="quizz_grid-button_grid">
        {data.map((item) => (
          <ButtonSelectionTitle
          key={item.title}
            image={item.icon}
            content={item.title}
            startCallBack={setIsStarted} subjectCallBack={setContent}        />
        ))}
      </div>
    </div>
  );
};
