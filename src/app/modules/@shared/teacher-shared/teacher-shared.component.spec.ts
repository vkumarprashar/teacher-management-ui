import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSharedComponent } from './teacher-shared.component';

describe('TeacherSharedComponent', () => {
  let component: TeacherSharedComponent;
  let fixture: ComponentFixture<TeacherSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherSharedComponent]
    });
    fixture = TestBed.createComponent(TeacherSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
