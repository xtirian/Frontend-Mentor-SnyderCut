import { useEffect, useState } from "react";
import "./style.scss";
import { handleTheme } from "../../service/handleTheme";

interface ToggleButtonType {
  changeTheme: Function;
}

const ToggleButton = ({ changeTheme }: ToggleButtonType) => {
  const [actualTheme, setActualTheme] = useState<String | null>(
    handleTheme.getStoredTheme()
  );

  const [isToggled, setIsToggled] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const getTheme = handleTheme.getStoredTheme();
    if (getTheme == "dark") {
      setIsToggled(true);
    }
  }, []);

  return (
    <div className="toggle_button-container">
      <img src="/icon-sun-dark.svg" alt="icon-sun" />
      <div
        className={`toggle_button-button ${isToggled ? "dark" : "light"} ${
          isToggled !== undefined ? "toggle_animation" : ""
        }`}
        onClick={() => {
          setIsToggled(!isToggled);

          if (actualTheme === "dark") {
            setActualTheme("light");
            changeTheme("light");
          }

          if (actualTheme === "light") {
            setActualTheme("dark");
            changeTheme("dark");
          }
        }}
      ></div>
      <img src="/icon-moon-dark.svg" alt="" />
    </div>
  );
};

export default ToggleButton;
