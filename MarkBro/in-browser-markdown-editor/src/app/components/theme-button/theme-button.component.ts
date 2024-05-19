import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss',
})
export class ThemeButtonComponent {
  theme: 'dark' | 'light' = 'light';
  isToggled: boolean = false;

  constructor(private themeService: ThemeService) {
    new ThemeService();
  }

  ngOnInit(): void {
    const getTheme = this.themeService.getTheme();
    this.theme = getTheme || 'light';
  }

  handleToggle(): void {
    if (this.theme === 'light') {
      this.themeService.setTheme('dark');
      this.theme = 'dark';
      this.isToggled = false;
    } else {
      this.themeService.setTheme('light');
      this.theme = 'light';
      this.isToggled = true;
    }
  }
}
