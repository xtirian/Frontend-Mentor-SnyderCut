import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';

  constructor() {
    const verifyTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (verifyTheme.matches) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
    verifyTheme.addEventListener('change', (e) => {
      if (e.matches) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    })
  }
  // Function to get the theme
  getTheme() {
    return localStorage.getItem('theme');
  }
  // Function to the the theme
  setTheme(theme: string) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }
}
