import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quete4Component } from './quete4.component';

describe('Quete4Component', () => {
  let component: Quete4Component;
  let fixture: ComponentFixture<Quete4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quete4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quete4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
