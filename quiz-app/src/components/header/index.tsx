import { useEffect, useState } from "react";
import ToggleButton from "../button-toggle";
import './style.scss';

interface headerTypes {
  headerIcon?: String;
}

const Header = ({ headerIcon }: headerTypes) => {
  
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
          <ToggleButton />
        </header>
      );
    } else {
      return (
        <header className="header-container">
          <ToggleButton/>
        </header>
      );
    }
  };

  return <>{headerSet()}</>;
};

export default Header;
