import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get the theme correctly', () => {
    service.setTheme('dark');
    expect(service.getTheme()).toEqual('dark');

    service.setTheme('light');
    expect(service.getTheme()).toEqual('light');
  });

});
