import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySingleComponent } from './country-single.component';

describe('CountrySingleComponent', () => {
  let component: CountrySingleComponent;
  let fixture: ComponentFixture<CountrySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
