import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quete3Component } from './quete3.component';

describe('Quete3Component', () => {
  let component: Quete3Component;
  let fixture: ComponentFixture<Quete3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quete3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quete3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
