import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRenameIdleComponent } from './file-rename-idle.component';

describe('FileRenameIdleComponent', () => {
  let component: FileRenameIdleComponent;
  let fixture: ComponentFixture<FileRenameIdleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileRenameIdleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileRenameIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
