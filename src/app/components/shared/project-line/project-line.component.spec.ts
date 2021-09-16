import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLineComponent } from './project-line.component';

describe('ProjectLineComponent', () => {
  let component: ProjectLineComponent;
  let fixture: ComponentFixture<ProjectLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
