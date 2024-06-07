import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenet1Component } from './componenet1.component';

describe('Componenet1Component', () => {
  let component: Componenet1Component;
  let fixture: ComponentFixture<Componenet1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componenet1Component]
    });
    fixture = TestBed.createComponent(Componenet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
