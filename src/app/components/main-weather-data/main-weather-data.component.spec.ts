import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherDataComponent } from './main-weather-data.component';

describe('MainWeatherDataComponent', () => {
  let component: MainWeatherDataComponent;
  let fixture: ComponentFixture<MainWeatherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWeatherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
