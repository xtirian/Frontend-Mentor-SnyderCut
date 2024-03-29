import { useEffect, useState } from "react";
import { HandleData } from "../../services/handleData";
import { filterSubject } from "../../services/answerHandle";

import "./style.scss";
import { HandleTheme } from "../../services/handleTheme";

const ResultBanner = () => {
  const { points } = HandleData.getPointsContext();

  const { content } = HandleData.getSubjectContent();

  const [Icon, setIcon] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const data = await HandleData.getData();

      const filterData = filterSubject(data, content)[0].icon;

      setIcon(filterData);
    };

    getData();
  }, []);


  const {theme} = HandleTheme.useTheme()


  return (
    <section className={`result_banner-container ${theme}`} tabIndex={1} title={`Quiz completed! You scored... ${points} points out of 10`}
    role="definition"
    aria-label={`Quiz completed! You scored... ${points} points out of 10`}>
      <div className="icone-container">
        <div className={`icone ${content}`}>
          <img src={`/${Icon}`} alt="icon escolhido" />
        </div>

        <span>{content}</span>
      </div>

      <div className="points-container">
        <h1>{points}</h1>
        <p>out of 10</p>
      </div>
    </section>
  );
};

export default ResultBanner;
