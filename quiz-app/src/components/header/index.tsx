import { useEffect, useState } from "react";
import ToggleButton from "../button-toggle";
import './style.scss';

interface headerTypes {
  headerIcon?: String;
  callChangeTheme: Function
}

const Header = ({ headerIcon, callChangeTheme }: headerTypes) => {
  
  const [HeaderType, setHeaderType] = useState<string|undefined>(undefined)

  useEffect(() => {
    if(headerIcon){
      setHeaderType(headerIcon?HeaderType:undefined)
    }
  }, [headerIcon])
  

  const headerSet = () => {
    if (headerIcon) {
      return (
        <header className="header-container">
          <img src={headerIcon?HeaderType:undefined} alt="icon escolhido" />
          <ToggleButton changeTheme={callChangeTheme} />
        </header>
      );
    } else {
      return (
        <header className="header-container">
          <ToggleButton changeTheme={callChangeTheme}  />
        </header>
      );
    }
  };

  return <>{headerSet()}</>;
};

export default Header;
