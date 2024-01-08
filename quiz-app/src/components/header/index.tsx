import { useEffect, useState } from "react";
import ToggleButton from "../button-toggle";
import "./style.scss";
import { HandleData } from "../../services/handleData";
import { filterSubject } from "../../services/answerHandle";

const Header = () => {
  const { isStarted } = HandleData.getStartContext();
  const { content } = HandleData.getSubjectContent();

  const [Icon, setIcon] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const data = await HandleData.getData();

      const filterData = filterSubject(data, content)[0].icon;

      setIcon(filterData);
    };

    if (isStarted) {
      getData();
    }
  }, [isStarted]);

  useEffect(() => {}, [isStarted]);

  const headerSet = () => {
    if (isStarted) {
      return (
        <header className={`header-container form`}>
          <div className="title-container">
            <div className={`icone ${content}`}>
              <img
                src={`/${Icon}`}
                alt="icon escolhido"
              />
              
            </div>
            <span>{content}</span>
          </div>
          <ToggleButton />
        </header>
      );
    } else {
      return (
        <header className="header-container">
          <ToggleButton />
        </header>
      );
    }
  };

  return <>{headerSet()}</>;
};

export default Header;
