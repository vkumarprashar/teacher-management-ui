import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSharedComponent } from './school-shared.component';

describe('SchoolSharedComponent', () => {
  let component: SchoolSharedComponent;
  let fixture: ComponentFixture<SchoolSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolSharedComponent]
    });
    fixture = TestBed.createComponent(SchoolSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
