import { HandleTheme } from "../../services/handleTheme";
import "./style.scss";

interface ButtonSelectionType {
  image: string;
  content: string;
  callBack: Function
}

export const ButtonSelectionTitle = ({ image, content, callBack }: ButtonSelectionType) => {

  const {theme} = HandleTheme.useTheme()



  return (
    <div className={`button_selection-container ${theme}`} onClick={() => callBack(content)}>
      <div className={`button_selection-image-container ${content}`}>
        <img src={`/${image}`} alt="" />
      </div>
      <p className={`button_selection-content`}>{content}</p>
    </div>
  );
};

