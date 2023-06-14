import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersdeliveredComponent } from './ordersdelivered.component';

describe('OrdersdeliveredComponent', () => {
  let component: OrdersdeliveredComponent;
  let fixture: ComponentFixture<OrdersdeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersdeliveredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
