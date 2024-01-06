import { useContext, useEffect, useState } from "react";
import "./style.scss";
import { HandleTheme } from "../../services/handleTheme";
import { ThemeContext } from "../../services/themeContext";


const ToggleButton = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, setTheme } = context;

  const [isToggled, setIsToggled] = useState<boolean | undefined>(undefined);

  // muda o design inicial do botão caso o tema seja dark
  useEffect(() => {
    const getTheme = HandleTheme.getStoredTheme();
    if (getTheme == "dark") {
      setIsToggled(true);
    }
  }, []);

  useEffect(() => {
    // if theme is light, its return false and set to dark. pretty easy
    setIsToggled(theme === "dark");
  }, [theme]);

  useEffect(() => {
    // took of the setTheme from the onclick function and put here in the isToggle useEffect because was creating a conflict
    if (isToggled) {
      setTheme("dark");
    }

    if (!isToggled) {
      setTheme("light");
    }
  }, [isToggled]);

  /*const [actualTheme, setActualTheme] = useState<String | null>(
    HandleTheme.getStoredTheme()
  );*/

  return (
    <div className="toggle_button-container">
      <img
        src={`/icon-sun-${theme == "dark" ? "light" : "dark"}.svg`}
        alt="icon-sun"
      />
      <div
        className={`toggle_button-button ${isToggled ? "dark" : "light"} ${
          isToggled !== undefined ? "toggle_animation" : ""
        }`}
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      ></div>
      <img
        src={`/icon-moon-${theme == "dark" ? "light" : "dark"}.svg`}
        alt=""
      />
    </div>
  );
};

export default ToggleButton;
