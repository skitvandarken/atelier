import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccoesComponent } from './coleccoes.component';

describe('ColeccoesComponent', () => {
  let component: ColeccoesComponent;
  let fixture: ComponentFixture<ColeccoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeccoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColeccoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
