import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldashboardComponent } from './schooldashboard.component';

describe('SchooldashboardComponent', () => {
  let component: SchooldashboardComponent;
  let fixture: ComponentFixture<SchooldashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchooldashboardComponent]
    });
    fixture = TestBed.createComponent(SchooldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
