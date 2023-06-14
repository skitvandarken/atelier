import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestaffsComponent } from './createstaffs.component';

describe('CreatestaffsComponent', () => {
  let component: CreatestaffsComponent;
  let fixture: ComponentFixture<CreatestaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestaffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatestaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
