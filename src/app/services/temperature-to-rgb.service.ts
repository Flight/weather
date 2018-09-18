import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureToRGBService {
  constructor() { }

  getRGB(temperature: number) {
    let red = 130;
    let blue = 130;

    if (temperature > 0) {
      red += 125 * Math.min(temperature / 35, 1);
    } else {
      blue += 125 * Math.min(-temperature / 20, 1);
    }

    return (red + ', 0, ' + blue);
  }
}
