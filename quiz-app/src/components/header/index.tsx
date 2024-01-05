import ToggleButton from "../button-toggle";

interface headerTypes {
  headerIcon?: String;
  callChangeTheme: Function
}

const Header = ({ headerIcon, callChangeTheme }: headerTypes) => {
  

  const headerSet = () => {
    if (headerIcon) {
      return (
        <header>
          <img src="" alt="" />
          <ToggleButton changeTheme={callChangeTheme} />
        </header>
      );
    } else {
      return (
        <header>
          <ToggleButton changeTheme={callChangeTheme}  />
        </header>
      );
    }
  };

  return <>{headerSet()}</>;
};

export default Header;
