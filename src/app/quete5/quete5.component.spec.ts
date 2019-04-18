import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quete5Component } from './quete5.component';

describe('Quete5Component', () => {
  let component: Quete5Component;
  let fixture: ComponentFixture<Quete5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quete5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quete5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
