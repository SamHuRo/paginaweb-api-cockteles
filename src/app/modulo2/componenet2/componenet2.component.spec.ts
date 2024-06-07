import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenet2Component } from './componenet2.component';

describe('Componenet2Component', () => {
  let component: Componenet2Component;
  let fixture: ComponentFixture<Componenet2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componenet2Component]
    });
    fixture = TestBed.createComponent(Componenet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
