import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSidebarComponent } from './school-sidebar.component';

describe('SchoolSidebarComponent', () => {
  let component: SchoolSidebarComponent;
  let fixture: ComponentFixture<SchoolSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolSidebarComponent]
    });
    fixture = TestBed.createComponent(SchoolSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
