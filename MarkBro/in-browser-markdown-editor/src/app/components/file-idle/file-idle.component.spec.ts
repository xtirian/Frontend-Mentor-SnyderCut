import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileIdleComponent } from './file-idle.component';

describe('FileIdleComponent', () => {
  let component: FileIdleComponent;
  let fixture: ComponentFixture<FileIdleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileIdleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
