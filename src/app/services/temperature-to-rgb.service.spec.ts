import { TestBed, inject } from '@angular/core/testing';

import { TemperatureToRGBService } from './temperature-to-rgb.service';

describe('TemperatureToRGBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureToRGBService]
    });
  });

  it('should be created', inject([TemperatureToRGBService], (service: TemperatureToRGBService) => {
    expect(service).toBeTruthy();
  }));
});
