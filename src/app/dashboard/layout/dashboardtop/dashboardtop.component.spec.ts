import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtopComponent } from './dashboardtop.component';

describe('DashboardtopComponent', () => {
  let component: DashboardtopComponent;
  let fixture: ComponentFixture<DashboardtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardtopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
