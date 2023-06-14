import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecollectionsComponent } from './createcollections.component';

describe('CreatecollectionsComponent', () => {
  let component: CreatecollectionsComponent;
  let fixture: ComponentFixture<CreatecollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
