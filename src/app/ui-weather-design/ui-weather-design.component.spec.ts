import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWeatherDesignComponent } from './ui-weather-design.component';

describe('UiWeatherDesignComponent', () => {
  let component: UiWeatherDesignComponent;
  let fixture: ComponentFixture<UiWeatherDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiWeatherDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWeatherDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
