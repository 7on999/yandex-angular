import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAndTraficComponent } from './weather-and-trafic.component';

describe('WeatherAndTraficComponent', () => {
  let component: WeatherAndTraficComponent;
  let fixture: ComponentFixture<WeatherAndTraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAndTraficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAndTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
