export class handleTheme{
  static getPreferredTheme = (): string => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const preferredTheme = prefersDarkMode ? 'dark' : 'light';
  
    // Salvar o tema no localStorage
    localStorage.setItem('preferredTheme', preferredTheme);
  
    return preferredTheme;
  };

  static getStoredTheme = (): string | null => {
    // Recupera o tema do localStorage
    const storedTheme = localStorage.getItem('preferredTheme');
    return storedTheme;
  };

  static setStoredTheme = (theme :string): void => {

    const newTheme = theme
    // seta o tema do localStorage
    localStorage.setItem('preferredTheme', newTheme);

    return;
  };

  
}