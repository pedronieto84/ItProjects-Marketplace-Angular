import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsetComponent } from './techset.component';

describe('TechsetComponent', () => {
  let component: TechsetComponent;
  let fixture: ComponentFixture<TechsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
