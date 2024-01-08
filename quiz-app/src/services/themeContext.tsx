import { ReactNode, createContext, useEffect, useState } from "react";
import { HandleTheme } from "./handleTheme";

interface ThemeContextProps {
  theme: string|undefined;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);


// PROVIDER
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  //HANDLE THEME
  const [mainTheme, setMainTheme] = useState<string|undefined>(undefined);

  useEffect(() => {
    //this use effect it's to take the settings theme from the browser when opening the page an set the mainTheme
    setMainTheme(HandleTheme.getPreferredTheme());
  }, []);

  //this function will change the theme
  function changeTheme(newTheme: string) {
    setMainTheme(newTheme);
    HandleTheme.setStoredTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme: mainTheme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
