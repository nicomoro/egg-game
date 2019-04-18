import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsBankComponent } from './eggs-bank.component';

describe('EggsBankComponent', () => {
  let component: EggsBankComponent;
  let fixture: ComponentFixture<EggsBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
