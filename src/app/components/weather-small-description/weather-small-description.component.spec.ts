import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSmallDescriptionComponent } from './weather-small-description.component';

describe('WeatherSmallDescriptionComponent', () => {
  let component: WeatherSmallDescriptionComponent;
  let fixture: ComponentFixture<WeatherSmallDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSmallDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSmallDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
