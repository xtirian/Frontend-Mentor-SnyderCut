import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';

  constructor() {
    if (typeof window !== 'undefined') {
      const verifyTheme = window.matchMedia('(prefers-color-scheme: dark)');
      if (verifyTheme.matches) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
      verifyTheme.addEventListener('change', (e) => {
        console.log('Theme preference changed:', e.matches ? 'dark' : 'light');
        if (e.matches) {
          this.setTheme('dark');
        } else {
          this.setTheme('light');
        }
      });

      const savedTheme = this.getTheme();
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else if (verifyTheme.matches) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    }
  }

  // Function to get the theme
  getTheme(): 'dark' | 'light' | null{
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'dark' | 'light';
    }
    return null;
  }


  // Function to the the theme
  setTheme(theme: string) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    if (typeof document !== 'undefined' && typeof document.body !== 'undefined') {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(theme);
    }
  }
}

