import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsideComponent } from './dashboardside.component';

describe('DashboardsideComponent', () => {
  let component: DashboardsideComponent;
  let fixture: ComponentFixture<DashboardsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
